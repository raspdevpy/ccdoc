const fs = require("fs");
const path = require("path");

function getSideBar(folder, title, options={}) {
	const extension = [".md"];
	if(!fs.existsSync(path.join(`${__dirname}/../${folder}`)))	return { text: title, children: [], collapsible:false,...options};
	const files = fs
		.readdirSync(path.join(`${__dirname}/../${folder}`))
		.filter(
			(item) =>
				item.toLowerCase() != "readme.md" &&
				fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
				extension.includes(path.extname(item))
		);
    for (let i = 0; i < files.length; i++) {
		let name = files[i]
		//-files[i]={text:name,link:`/${folder}/${name}`}
		files[i]=`/${folder}/${name}`
	}
	return { text: title, children: files, collapsible:false,...options};

	
}

module.exports= {
	sidebarDepth: 1,
	sidebar:{
	//getSideBar("functions","Functions")
	'/':[
		{
				text: 'Guide',
				children: [
				'/'
				]
		},
		
		getSideBar('Guide','Full Guide'),
		getSideBar('Trigger','Trigger Types'),
		getSideBar('Tutorials','Tutorials & Examples'),

		getSideBar('Other','Other Information'),
		// getSideBar('Templates','Templates'),
		{    
			text: 'Functions',
			collapsible:true,
			children:[
			getSideBar('Member','Member Functions',{collapsible:true}),
			getSideBar('Channel','Channel Functions',{collapsible:true}),
			getSideBar('Message','Message Functions',{collapsible:true}),
			getSideBar('Interaction','Interaction Functions',{collapsible:true}),
			getSideBar('Threads','Threads Functions',{collapsible:true}),
			getSideBar('Role','Role Functions',{collapsible:true}),
			getSideBar('Server','Server Functions',{collapsible:true}),
			getSideBar('Random','Random Functions',{collapsible:true}),
			getSideBar('Text','Text Functions',{collapsible:true}),
			getSideBar('Text/Condition','Condition Functions',{collapsible:true}),
			getSideBar('Stickers','Sticker Functions',{collapsible:true}),
			getSideBar('Events','Event Functions',{collapsible:true}),
			getSideBar('Timeout','User Timeout Functions',{collapsible:true}),
			getSideBar('Text/Embed','Embed functions',{collapsible:true}),
			getSideBar('Text/Components','Button Functions',{collapsible:true}),
			getSideBar('Text/Math','Math Functions',{collapsible:true}),
			getSideBar('Text/textSplit','Text Split Functions',{collapsible:true}),
			getSideBar('Text/Array','Array Functions',{collapsible:true}),
			getSideBar('Text/Object','Object Functions',{collapsible:true}),
			getSideBar('Text/isandhas','Is and Has Functions',{collapsible:true}),
			getSideBar('Text/only','Only Functions',{collapsible:true}),
			getSideBar('Text/Regex','Regex Functions',{collapsible:true}),
			getSideBar('Date','Date Functions',{collapsible:true}),
			getSideBar('Variables','Variables Functions',{collapsible:true}),
			getSideBar('Bot','Bot Functions',{collapsible:true}),
			getSideBar('Useful','Useful Functions',{collapsible:true}),
			getSideBar('Cooldown','Cooldown functions',{collapsible:true}),
			getSideBar('Request','Http Requests functions',{collapsible:true}),
			getSideBar('Image','Image Builder functions',{collapsible:true}),
			getSideBar('Unclassified','Unclassfied Functions',{collapsible:true})
		]
	},		
		getSideBar('Contribution_Info','Contribute'),
	]
	}
}
