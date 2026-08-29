import { loader } from "fumadocs-core/source";
import { docsContentRoute, docsRoute } from "./shared";
import { defineDocs } from "fumadocs-mdx/macro";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
// import remarkEmoji from 'remark-emoji'; // later to support, since it broke the search api
const docs = defineDocs({
    dir: "content/docs",
    docs: {
        // mdxOptions: {
        // remarkPlugins: [remarkEmoji],
        // },

        schema: pageSchema,
        postprocess: {
            includeProcessedMarkdown: true,
        },
    },
    meta: {
        schema: metaSchema,
    },
});

export const source = loader({
    baseUrl: docsRoute,
    source: docs.toFumadocsSource(),
    plugins: [],
});

export function getPageMarkdownUrl(page: (typeof source)["$inferPage"]) {
    const segments = [...page.slugs, "content.md"];

    return {
        segments,
        url:
            "/" +
            [page.locale, ...docsContentRoute.split("/"), ...segments]
                .filter(Boolean)
                .join("/"),
    };
}

export async function getLLMText(page: (typeof source)["$inferPage"]) {
    const processed = await page.data.getText("processed");

    return `# ${page.data.title} (${page.url})

${processed}`;
}
