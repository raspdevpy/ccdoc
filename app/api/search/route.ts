import fs from 'node:fs';
import path from 'node:path';
import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

/** difficulty labels were never treated as tags */
const NOT_A_TAG = /Easy|Difficult|Read Below|Medium|Bugged/i;

/**
 * The old VuePress search fed `<Badge text="…" />` values into the index via
 * `parseTags.js`, which is how searching "kick" or "reactions" finds a
 * function. Badge props are JSX attributes, so they never reach the structured
 * content Fumadocs indexes by default — read them back off the source file.
 */
function tagsFor(filePath: string, title: string) {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content/docs', filePath), 'utf8');

  const tags: string[] = [];
  for (const [, text] of raw.matchAll(/<(?:Badge|Tag)[^>]*\btext="([^"]*)"/g)) {
    if (text.length > 1 && !NOT_A_TAG.test(text)) tags.push(text);
  }
  // the old plugin also indexed the bare function name
  if (title.startsWith('$')) tags.push(title.slice(1));

  return [...new Set(tags)];
}

export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
  buildIndex(page) {
    const structuredData = page.data.structuredData;
    const tags = tagsFor(page.path, page.data.title);

    return {
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      structuredData: tags.length
        ? {
            ...structuredData,
            contents: [
              ...structuredData.contents,
              { heading: undefined, content: tags.join(' ') },
            ],
          }
        : structuredData,
    };
  },
});
