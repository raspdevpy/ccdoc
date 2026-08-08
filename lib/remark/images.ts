import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import type { Root, Image, Parent } from 'mdast';

const CACHE_DIR = path.join(process.cwd(), 'public/images');

/**
 * Must stay byte-identical to the old VuePress `imageReplacement` helper: the
 * cache in public/images is filled by a separate process using that naming, so
 * the extension is taken from the raw URL (query string included) rather than
 * from the parsed pathname.
 */
function hashedName(url: string) {
  const ext = path.extname(url);
  return crypto.createHash('sha256').update(url).digest('hex') + ext;
}

/**
 * Port of the VuePress `imageReplacement` replacer: swaps a remote image URL
 * for a locally cached copy at `public/images/<sha256>.<ext>`, when one has
 * been downloaded. Falls back to the remote URL when it hasn't.
 */
export function remarkCachedImages() {
  return (tree: Root) => {
    const visit = (node: Parent) => {
      for (const child of node.children) {
        if (child.type === 'image') {
          const image = child as Image;
          if (!/^https?:\/\//.test(image.url)) continue;

          let name: string;
          try {
            name = hashedName(image.url);
          } catch {
            continue;
          }

          if (fs.existsSync(path.join(CACHE_DIR, name))) {
            image.url = `/images/${name}`;
          }
          continue;
        }
        if ('children' in child) visit(child as Parent);
      }
    };

    visit(tree);
  };
}
