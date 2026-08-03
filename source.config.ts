import { defineConfig } from "fumadocs-mdx/config";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import type { ShikiTransformer } from "shiki";
import { remarkCooldowns } from "./lib/remark/cooldowns";
import { remarkFunctionLinks } from "./lib/remark/function-links";
import { remarkCachedImages } from "./lib/remark/images";

const transformerLineNumbers: ShikiTransformer = {
    name: "shiki-transformer-line-numbers",
    pre(node) {
        node.properties["data-line-numbers"] = "";
    },
};

export default defineConfig({
    mdxOptions: {
        remarkPlugins: (v) => [
            remarkCooldowns,
            remarkFunctionLinks,
            remarkCachedImages,
            ...v,
        ],

        remarkImageOptions: {
            external: false,
            onError: "ignore",
        },

        rehypeCodeOptions: {
            ...rehypeCodeDefaultOptions,
            themes: { light: "github-light", dark: "github-dark" },
            transformers: [
                ...(rehypeCodeDefaultOptions.transformers ?? []),
                transformerLineNumbers,
            ],
        },
    },
});
