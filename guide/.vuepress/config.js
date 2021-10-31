const sidebar = require('./sidebar');
const parseTag = require('./parseTags');
module.exports = {
	lang: 'en-US',
	title: 'Custom Command Bot',
	description: 'The documentation of Custom Command bot',
	theme: '@vuepress/default',
	//plugins: ['@vuepress/plugin-container'],
	plugins: [
		['@vuepress/plugin-search',{
			maxSuggestions:15,
			getExtraFields: (page) =>parseTag(page),
		}],
		['@vuepress/plugin-container']
	],
	
	themeConfig: {
		docsDir: 'guide',
		navbar: [
			{
				text: 'Dashboard',
				link: 'https://ccommandbot.ga/dashboard',
			},

			{
				text: 'Discord',
				link: 'https://discord.gg/ZFQNZA4Ekz',
			},
		],
		repo: 'raspdevpy/ccdoc',
		contributors:false,
		search: true,
		logo: 'https://cdn.discordapp.com/icons/832255686783533066/f7131f694c6e1a2bd9c360d8b525d4e3.webp',
		sidebarDepth: 1,
		editLinks: true,
		editLinkText: 'Improve This Page!',
		lastUpdated: true,
		sidebar,

	},
}