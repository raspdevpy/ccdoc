import fs from 'node:fs';
import path from 'node:path';
import type { Root, InlineCode, Parent } from 'mdast';

const CONTENT = path.join(process.cwd(), 'content/docs');

/** lowercased function name -> site route, e.g. `sendmessage` -> `/Message/sendMessage` */
let routes: Map<string, string> | null = null;

function buildRoutes() {
  const map = new Map<string, { url: string; isFunction: boolean }>();

  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
        continue;
      }
      if (!entry.name.endsWith('.mdx')) continue;

      const rel = path.relative(CONTENT, full).split(path.sep).join('/');
      const isFunction = rel.startsWith('(functions)/');
      const url = '/' + rel.replace(/\.mdx$/, '').replace(/^\(functions\)\//, '');
      const key = path.basename(entry.name, '.mdx').toLowerCase();

      /*
       * Six names exist in two places (e.g. $modal is both a function and a
       * trigger page). The old scan let the last match win, which pointed
       * `$modal` at /Trigger/modal instead of the function — always prefer the
       * function page, and otherwise keep the first match.
       */
      const existing = map.get(key);
      if (!existing || (isFunction && !existing.isFunction)) {
        map.set(key, { url, isFunction });
      }
    }
  };

  walk(CONTENT);
  return new Map([...map].map(([key, { url }]) => [key, url]));
}

/**
 * Port of the VuePress `functionLinkReference` replacer: turns an inline
 * `` `$someFunction` `` into a link to that function's page.
 *
 * Unlike the original this skips self-references, which previously produced a
 * link from a page to itself.
 */
export function remarkFunctionLinks() {
  return (tree: Root, file: { path?: string }) => {
    routes ??= buildRoutes();

    const self = file.path ? path.basename(file.path, '.mdx').toLowerCase() : null;

    const visit = (node: Parent) => {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];

        if (child.type === 'inlineCode') {
          const match = (child as InlineCode).value.match(/^\$([A-Za-z]+)$/);
          if (!match) continue;

          const name = match[1].toLowerCase();
          if (name === self) continue;

          const url = routes!.get(name);
          if (!url) continue;

          node.children[i] = {
            type: 'link',
            url,
            children: [child],
          } as never;
          continue;
        }

        /*
         * Skip links and code blocks (no nested anchors, no rewriting source),
         * and skip headings: Fumadocs wraps every heading in its own anchor, so
         * a link inside one is invalid HTML and breaks hydration.
         */
        if (child.type === 'link' || child.type === 'code' || child.type === 'heading') continue;
        if ('children' in child) visit(child as Parent);
      }
    };

    visit(tree);
  };
}
