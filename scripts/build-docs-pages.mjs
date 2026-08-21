import fs from "node:fs";
import path from "node:path";
import * as cheerio from "cheerio";

const OUT = path.join(process.cwd(), "out");
const CONTENT = path.join(process.cwd(), "content/docs");

const NOT_A_TAG = /Easy|Difficult|Read Below|Medium|Bugged/i;

function walk(dir, test, found = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, test, found);
        else if (test(entry.name)) found.push(full);
    }
    return found;
}

const sources = new Map();
for (const file of walk(CONTENT, (n) => n.endsWith(".mdx"))) {
    const route =
        "/" +
        path
            .relative(CONTENT, file)
            .replace(/\.mdx$/, "")
            .replace(/^\(functions\)[/\\]/, "")
            .split(path.sep)
            .join("/");
    sources.set(route === "/index" ? "/" : route, file);
}

function metaFor(route) {
    const file = sources.get(route);
    if (!file) return { title: null, tags: [] };

    const raw = fs.readFileSync(file, "utf8");
    const title =
        raw
            .match(/^title:\s*(.*)$/m)?.[1]
            ?.trim()
            .replace(/^"|"$/g, "") ?? null;

    const tags = [];
    for (const [, text] of raw.matchAll(/<Badge[^>]*\btext="([^"]*)"/g)) {
        if (text.length > 1 && !NOT_A_TAG.test(text)) tags.push(text);
    }
    if (title?.startsWith("$")) tags.push(title.slice(1));

    return { title, tags };
}

const pages = [];
for (const file of walk(OUT, (n) => n.endsWith(".html"))) {
    if (file.includes(`${path.sep}_next${path.sep}`)) continue;

    const rel = path
        .relative(OUT, file)
        .replace(/\.html$/, "")
        .split(path.sep)
        .join("/");
    if (rel === "404" || rel === "_not-found") continue;
    const route = rel === "index" ? "/" : "/" + rel;

    const $ = cheerio.load(fs.readFileSync(file, "utf8"));
    const content = $(".prose").first().html();
    if (content === null) continue;

    const { title, tags } = metaFor(route);
    pages.push({ title, path: route, content, tags });
}

pages.sort((a, b) => a.path.localeCompare(b.path));
fs.writeFileSync(
    path.join(OUT, "docs-pages.json"),
    JSON.stringify(pages, null, 2),
);
console.log(`[docs-pages] wrote ${pages.length} pages to out/docs-pages.json`);
