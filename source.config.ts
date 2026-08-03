import { defineConfig } from 'fumadocs-mdx/config';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import type { ShikiTransformer } from 'shiki';
import { remarkCooldowns } from './lib/remark/cooldowns';
import { remarkFunctionLinks } from './lib/remark/function-links';
import { remarkCachedImages } from './lib/remark/images';

const transformerLineNumbers: ShikiTransformer = {
  name: 'shiki-transformer-line-numbers',
  pre(node) {
    node.properties['data-line-numbers'] = '';
  },
};

export default defineConfig({
  mdxOptions: {
    // prepended so the generated cooldown headings are picked up by Fumadocs'
    // own table-of-contents plugin, which runs later in the chain
    remarkPlugins: (v) => [remarkCooldowns, remarkFunctionLinks, remarkCachedImages, ...v],

    // The docs link to a lot of Discord CDN attachments, many of them long
    // dead. Fetching each one at build time to measure it fails the build and
    // matches nothing the old VuePress site did — remote images stayed plain
    // <img> tags there too.
    remarkImageOptions: {
      external: false,
      onError: 'ignore',
    },

    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      themes: { light: 'github-light', dark: 'github-dark' },
      // ```discord blocks show raw command input, not a real language. VuePress'
      // Prism silently fell back to plain text; Shiki throws instead.
      langAlias: {
        discord: 'text',
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerLineNumbers,
      ],
    },
  },
});