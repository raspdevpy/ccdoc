export const appName = "Custom Command";
export const appDescription = "Custom Command Bot's Documentation";
export const siteUrl = "https://doc.ccommandbot.com";

// Mirrors the `basePath` from next.config.mjs so public assets resolve correctly.
export const basePath = (process.env.BASE_URL ?? "").replace(/\/$/, "");

export const botIcon = `${basePath}/icon.png`;
export const userAvatar = "https://cdn.discordapp.com/embed/avatars/0.png";

export const docsRoute = "/";
export const docsContentRoute = "/llms.mdx";

export const gitConfig = {
    user: "raspdevpy",
    repo: "ccdoc",
    branch: "main",
};
