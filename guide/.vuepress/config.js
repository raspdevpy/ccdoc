import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { removeHtmlExtensionPlugin } from "vuepress-plugin-remove-html-extension";

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
        [
            "meta",
            {
                name: "twitter:image",
                content: "https://doc.ccommandbot.com/bot-profile.png",
            },
        ],
        [
            "meta",
            {
                property: "og:image",
                content: "https://doc.ccommandbot.com/bot-profile.png",
            },
        ],
        ["meta", { name: "theme-color", content: "#74b0f7" }],
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
                name: "twitter:description",
                content: "Custom Command Bot's Documentation",
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
        {
            name: "dynamic-meta-plugin",
            extendsPage: (page) => {
                const title = page.title || null;
                const newTitle = title
                    ? `${title} | Custom Command`
                    : "Custom Command Documentation";

                page.frontmatter.head = [
                    ["meta", { property: "og:title", content: newTitle }],
                    ["meta", { name: "twitter:title", content: newTitle }],
                ];
            },
        },

        searchPlugin({
            maxSuggestions: 15,
            getExtraFields: (page) => parseTag(page),
        }),
        removeHtmlExtensionPlugin(),
    ],
};
