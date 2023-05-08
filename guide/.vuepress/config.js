const sidebar = require('./sidebar');
const parseTag = require('./parseTags');
const { write } = require('./parseTags');
module.exports = {
	lang: 'en-US',
	title: 'Custom Command Bot',
	description: 'The documentation of Custom Command bot',
	theme: '@vuepress/default',
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	//plugins: ['@vuepress/plugin-container'],
	plugins: [
		['@vuepress/plugin-search',{
			maxSuggestions:15,
			getExtraFields: (page) =>parseTag(page),
		}],
		['@vuepress/plugin-container']
	],
	// base:"/ccdoc/dist/",
	themeConfig: {
		docsDir: 'guide',
		navbar: [
			{
				text: 'Dashboard',
				link: 'https://ccommandbot.com/dashboard',
			},

			{
				text: 'Discord',
				link: 'https://discord.gg/ccbot',
			},
		],
		repo: 'raspdevpy/ccdoc',
		contributors:false,
		search: true,
		logo: 'https://cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp',
		editLinks: true,
		editLinkText: 'Improve This Page!',
		lastUpdated: true,
		...sidebar,

	},
	
}