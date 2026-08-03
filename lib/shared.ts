export const appName = 'Custom Command';
export const appDescription = "Custom Command Bot's Documentation";
export const siteUrl = 'https://doc.ccommandbot.com';
export const socialImage = `${siteUrl}/bot-profile.png`;

// Docs are mounted at the site root so URLs match the previous VuePress site
// (e.g. /Member/setNickname), keeping every existing inbound link alive.
export const docsRoute = '/';
export const docsContentRoute = '/llms.mdx';

export const gitConfig = {
  user: 'raspdevpy',
  repo: 'ccdoc',
  branch: 'main',
};
