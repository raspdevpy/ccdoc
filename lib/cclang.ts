import type { LanguageRegistration } from "shiki";
import githubDark from "shiki/themes/github-dark.mjs";
import githubLight from "shiki/themes/github-light.mjs";

export const cclang: LanguageRegistration = {
    name: "cc",
    scopeName: "source.cclang",
    repository: {},
    patterns: [
        {
            name: "keyword.function.cclang",
            match: "\\$[\\w\\d_]+",
        },
        {
            name: "comment.line.double-slash",
            match: "//.*$",
        },
        {
            name: "comment.block",
            begin: "/\\*",
            end: "\\*/",
        },
        {
            name: "keyword.important.cclang",
            match: "[\\[\\];]",
        },
        {
            name: "keyword.digits.cclang",
            match: "(?<![\\w_])\\d+(?![\\w_])",
        },
        {
            name: "keyword.curl.cclang",
            match: "{[\\w\\d_]*(?=[:=])|(?<={)[\\w\\d_]+(?=})|[{}]",
        },
        {
            name: "keyword.condition.cclang",
            match: "([<>]=?|!==?|===?)",
        },
        {
            name: "keyword.keys.cclang",
            match: "(?<={[\\w\\d_]*)[:=]",
        },
        {
            name: "keyword.tags.cclang",
            match: "#[A-Z]{2,}#",
        },
    ],
};

export const cc_dark = {
    ...githubDark,
    name: "cc-dark",
    tokenColors: [
        {
            scope: ["keyword.function.cclang"],
            settings: {
                foreground: "rgb(133, 255, 255)",
            },
        },
        {
            scope: ["keyword.important.cclang"],
            settings: {
                foreground: "rgb(255, 66, 129)",
            },
        },
        {
            scope: ["keyword.digits.cclang"],
            settings: {
                foreground: "rgb(78, 190, 255)",
            },
        },
        {
            scope: ["keyword.curl.cclang"],
            settings: {
                foreground: "rgb(214, 133, 255)",
            },
        },
        {
            scope: ["keyword.condition.cclang"],
            settings: {
                foreground: "rgb(255, 165, 0)",
            },
        },
        {
            scope: ["keyword.keys.cclang"],
            settings: {
                foreground: "rgb(240, 128, 128)",
            },
        },
        {
            scope: ["keyword.tags.cclang"],
            settings: {
                foreground: "rgb(174, 220, 174)",
            },
        },
        ...(githubDark.tokenColors ?? []),
    ],
};

export const cc_light = {
    ...githubLight,
    name: "cc-light",
    tokenColors: [
        {
            scope: ["keyword.function.cclang"],
            settings: {
                foreground: "rgb(53, 175, 255)",
            },
        },
        {
            scope: ["keyword.important.cclang"],
            settings: {
                foreground: "rgb(255, 66, 129)",
            },
        },
        {
            scope: ["keyword.digits.cclang"],
            settings: {
                foreground: "rgb(78, 190, 255)",
            },
        },
        {
            scope: ["keyword.curl.cclang"],
            settings: {
                foreground: "rgb(194, 113, 225)",
            },
        },
        {
            scope: ["keyword.condition.cclang"],
            settings: {
                foreground: "rgb(255, 165, 0)",
            },
        },
        {
            scope: ["keyword.keys.cclang"],
            settings: {
                foreground: "rgb(240, 128, 128)",
            },
        },
        {
            scope: ["keyword.tags.cclang"],
            settings: {
                foreground: "rgb(174, 220, 174)",
            },
        },
        ...(githubLight.tokenColors ?? []),
    ],
};
