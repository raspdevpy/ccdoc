import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";

import { getDirname, path } from "vuepress/utils";
import fs from "fs";

import sidebar from "./sidebar.js";
import parseTag from "./parseTags.js";
import replacements from "./replacements.js";

const replacePageContent = (content, replacements) => {
    let output = content;
    for (const [placeholder, replacement] of Object.entries(replacements)) {
        const regex = new RegExp(`${placeholder}`, "g");
        output = output.replace(regex, replacement);
    }
    return output;
};

const aiFiles = new Set();

function scanAiFiles(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            scanAiFiles(fullPath);
        } else if (entry.name.endsWith("_ai.md")) {
            aiFiles.add(entry.name.split("/").pop());
        }
    });
}

scanAiFiles(getDirname(import.meta.url) + "/../");
module.exports = {
    lang: "en-US",
    title: "Custom Command",
    description: "Custom Command Bot's Documentation",
    bundler: viteBundler(),

    theme: defaultTheme({
        docsDir: "guide",
        navbar: [
            {
                text: "Dashboard",
                link: "https://ccommandbot.com/dashboard",
            },
            {
                text: "Discord",
                link: "https://discord.gg/ZFQNZA4Ekz",
            },
        ],
        repo: "raspdevpy/ccdoc",
        contributors: false,
        logo: "/favicon.ico",
        editLink: true,
        editLinkText: "Improve This Page!",
        lastUpdated: true,
        ...sidebar,
    }),

    head: [
        [
            "link",
            {
                rel: "icon",
                href: "https://doc.ccommandbot.com/bot-profile.png",
            },
        ],
        ["meta", { name: "theme-color", content: "#74b0f7" }],

        ["meta", { property: "og:title", content: "Custom Command Bot" }],
        [
            "meta",
            {
                property: "og:description",
                content: "Custom Command Bot's Documentation",
            },
        ],
        [
            "meta",
            {
                property: "og:image",
                content: "https://doc.ccommandbot.com/bot-profile.png",
            },
        ],
        ["meta", { property: "og:url", content: "https://ccommandbot.com" }],

        ["meta", { name: "twitter:title", content: "Custom Command Bot" }],
        [
            "meta",
            {
                name: "twitter:description",
                content: "Custom Command Bot's Documentation",
            },
        ],
        [
            "meta",
            {
                name: "twitter:image",
                content: "https://doc.ccommandbot.com/bot-profile.png",
            },
        ],
    ],

    plugins: [
        {
            name: "replace-content-plugin",
            extendsMarkdown: (md) => {
                const render = md.render;
                md.render = (...args) => {
                    args[0] = replacements(args.slice(1), args[0]);
                    const html = render.call(md, ...args);
                    return html;
                };
            },
        },

        searchPlugin({
            maxSuggestions: 15,
            isSearchable: (page) => {
                const file = page.data.filePathRelative;

                if (!file) return true;

                if (file.endsWith("_ai.md")) return true;
                return !aiFiles.has(
                    file.replace(".md", "_ai.md").split("/").pop(),
                );
            },
            getExtraFields: (page) => parseTag(page),
        }),
    ],
};
