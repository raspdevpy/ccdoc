const sidebar = require('./sidebar');
const parseTag = require('./parseTags');
const replacements = require('./replacements');
const replacePageContent = (content, replacements) => {
	let output = content;
	for (const [placeholder, replacement] of Object.entries(replacements)) {
	  const regex = new RegExp(`${placeholder}`, 'g');
	  output = output.replace(regex, replacement);
	}
	return output;
  };
module.exports = {
	lang: 'en-US',
	title: 'Custom Command Bot',
	description: 'The documentation of Custom Command bot',
	theme: '@vuepress/default',
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	//plugins: ['@vuepress/plugin-container'],
	plugins: [
		(options, context) => ({
			name: 'replace-content-plugin',
			extendsMarkdown: md => {
				const render = md.render;
				md.render = (...args) => {
					args[0]=replacements(args.slice(1),args[0])
				  	const html = render.call(md, ...args);
					return html
			
				};
			  },
		  }),
		['@vuepress/plugin-search',{
			maxSuggestions:15,
			getExtraFields: (page) =>parseTag(page),
		}],
		['@vuepress/plugin-container'],

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
				link: 'https://discord.gg/ZFQNZA4Ekz',
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