const sidebar = require('./sidebar');
const parseTag = require('./parseTags');
const replacements = require('./replacements');
const fs = require('fs')
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
	title: 'Custom Command',
	description: 'Custom Command Bot\'s Documentation',
	theme: '@vuepress/default',
	head: [
		['link', { rel: 'icon', href: 'https://doc.ccommandbot.com/bot-profile.png' }],
		['meta', { name: 'theme-color', content: '#74b0f7' }],

		['meta', { property: 'og:title', content: 'Custom Command Bot' }],
		['meta', { property: 'og:description', content: 'Custom Command Bot\'s Documentation' }],
		['meta', { property: 'og:image', content: 'https://doc.ccommandbot.com/bot-profile.png' }],
		['meta', { property: 'og:url', content: 'https://ccommandbot.com' }],


		['meta', { name: 'twitter:title', content: 'Custom Command Bot' }],
		['meta', { name: 'twitter:description', content: 'Custom Command Bot\'s Documentation' }],
		['meta', { name: 'twitter:image', content: 'https://doc.ccommandbot.com/bot-profile.png' }]
	],
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
			isSearchable:(page)=>{
				if(!page.data.filePathRelative)	return true;
				if(page.data.filePathRelative.endsWith('_ai.md'))
					return true;
				let aiFile = __dirname+'/../'+page.data.filePathRelative.replace('.md','_ai.md');
				if(fs.existsSync(aiFile))	return false;
				return true;
			},
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
		logo: '/favicon.ico',
		editLinks: true,
		editLinkText: 'Improve This Page!',
		lastUpdated: true,
		...sidebar,

	},
	
}