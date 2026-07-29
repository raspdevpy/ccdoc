const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function getSideBar(folder, title, options = {}) {
    const children = getChildren(folder);
    return { text: title, children, collapsible: false, ...options };
}

function getChildren(folder) {
    if (!fs.existsSync(path.join(`${__dirname}/../${folder}`))) return [];

    const files = fs
        // get all files in $folder
        .readdirSync(path.join(`${__dirname}/../${folder}`), {
            withFileTypes: true,
        })
        .filter((dirent) => dirent.isFile())
        // read frontmatter and append a weight to each file
        .map((item) => {
            const fileContent = fs.readFileSync(
                `${item.parentPath}/${item.name}`,
                "utf8",
            );
            const { data } = matter(fileContent);
            return {
                name: item.name,
                path: `/${folder}/${item.name}`,
                weight: data.weight ?? -1,
                hidden: data.hidden ?? false,
            };
        })
        // remove non .md files, and filter out files that are hidden
        .filter(
            (item) =>
                item.path.endsWith(".md") &&
                !item.hidden &&
                item.name.toLowerCase() != "readme.md",
        )
        // sort files based on weight
        .sort((a, b) => {
            if (a.weight === -1 && b.weight === -1) return 0;
            if (a.weight === -1) return 1;
            if (b.weight === -1) return -1;
            return a.weight - b.weight;
        })
        // convert back to array of paths
        .map((file) => file.path);

    return files;
}

module.exports = {
    sidebarDepth: 1,
    sidebar: {
        "/": [
            {
                text: "Guide",
                children: ["/", ...getChildren("Guide")],
            },
            getSideBar("Trigger", "Trigger Types", { collapsible: true }),
            getSideBar("Tutorials", "Tutorials & Examples", {
                collapsible: true,
            }),
            getSideBar("Other", "Other Information"),
            getSideBar("Changelogs", "Changelogs", { collapsible: true }),
            // getSideBar('Templates','Templates'),
            {
                text: "Functions",
                collapsible: true,
                children: [
                    getSideBar("Member", "Member Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Channel", "Channel Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Message", "Message Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Interaction", "Interaction Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Threads", "Threads Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Role", "Role Functions", { collapsible: true }),
                    getSideBar("Server", "Server Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Random", "Random Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Text", "Text Functions", { collapsible: true }),
                    getSideBar("Text/Condition", "Condition Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Stickers", "Sticker Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Events", "Event Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Timeout", "User Timeout Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Text/Embed", "Embed functions", {
                        collapsible: true,
                    }),
                    getSideBar("Text/Components", "Button Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Text/Math", "Math Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Text/textSplit", "Text Split Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Text/Array", "Array Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Text/Object", "Object Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Text/isandhas", "Is and Has Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Text/only", "Only Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Text/Regex", "Regex Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Date", "Date Functions", { collapsible: true }),
                    getSideBar("Variables", "Variables Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Bot", "Bot Functions", { collapsible: true }),
                    getSideBar("Useful", "Useful Functions", {
                        collapsible: true,
                    }),
                    getSideBar("Cooldown", "Cooldown functions", {
                        collapsible: true,
                    }),
                    getSideBar("Request", "Http Requests functions", {
                        collapsible: true,
                    }),
                    getSideBar("Image", "Image Builder functions", {
                        collapsible: true,
                    }),
                    // getSideBar('Unclassified','Unclassfied Functions',{collapsible:true})
                ],
            },
            getSideBar("Contribution_Info", "Contribute", { collapsible: true }),
            getSideBar("Legal", "Legal"),
        ],
    },
};
