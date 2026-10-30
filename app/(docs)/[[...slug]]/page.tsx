import { source } from "@/lib/source";
import {
    DocsBody,
    DocsDescription,
    DocsPage,
    DocsTitle,
    PageLastUpdate,
} from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/components/mdx";
import type { Metadata } from "next";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { siteUrl, appName, gitConfig, botIcon, appDescription } from "@/lib/shared";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { getEditTime } from "@/lib/getEditTime";
import { Message } from "@/components/chats/message/message";

export default async function Page(props: PageProps<"/[[...slug]]">) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    const MDX = page.data.body;

    const editedAt = getEditTime(page.path);
    // const validTime = !isNaN(editedAt.getTime());
    const validTime = false;
    
    const rawText = await page.data.getText("processed");
    const cleaned = rawText
        .replace(/<[^>]+>/g, "") // Tags
        .replace(/!\[.*?\]\(.*?\)/g, "") // Images
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Links
        .replace(/\s*\[#.*?\]/g, "") // Anchors
        .replace(/\\+$/gm, ""); // Backslashes on end

    const lines = cleaned
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
    const previewLines = [];
    let headings = 0;

    for (const line of lines) {
        if (line.startsWith("## ")) {
            if (headings === 1) break;
            headings++;
        }
        if (/^#+\s.*Usage/i.test(line)) break;
        previewLines.push(line);
        if (previewLines.length === 8) break;
    }
    const previewText = previewLines.join("\n");
    
    const components = {
        component: {
            type: 17,
            accent_color: 7647479,
            components: [
                {
                    type: 9,
                    accessory: {
                        type: 11,
                        media: { url: siteUrl + botIcon }
                    },
                    components: [
                        { type: 10, content: `# [${page.data.title}](${siteUrl + page.url})\n${previewText}` }
                    ]
                },
                {
                    type: 1,
                    components: [
                        { type: 2, style: 5, label: "Learn More", url: siteUrl + page.url }
                    ]
                }
            ]
        }
    };

    return (
        <>
            <script
                id="discord:component-embed"
                type="application/json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(components) }}
            />
            <DocsPage toc={page.data.toc} full={page.data.full}>
                <DocsTitle>{page.data.title}</DocsTitle>
                <DocsDescription className="mb-0">
                    {page.data.description}
                </DocsDescription>
                <DocsBody>
                    <MDX
                        components={getMDXComponents({
                            a: createRelativeLink(source, page),
                            Message: (props) => (
                                <Message {...props} file={`${page.path}`} />
                            ),
                        })}
                    />
                </DocsBody>
                <div className="flex flex-row gap-2 items-center border-b pb-6">
                    {validTime && <PageLastUpdate date={editedAt} />}
                    <div className="flex-1"></div>
                    <Button
                        color="secondary"
                        icon={<GitHubLogoIcon />}
                        link={`https://github.com/${gitConfig.user}/${gitConfig.repo}/edit/${gitConfig.branch}/content/docs/${page.path}`}
                    >
                        Edit This Page
                    </Button>
                </div>
            </DocsPage>
        </>
    );
}

export async function generateStaticParams() {
    return source.generateParams();
}

export async function generateMetadata(
    props: PageProps<"/[[...slug]]">,
): Promise<Metadata> {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    const social = page.data.title
        ? `${page.data.title} | ${appName}`
        : `${appName} Documentation`;
    
    return {
        title: page.data.title,
        description: appDescription,
        openGraph: {
            title: social,
            description: appDescription,
            images: botIcon,
        },
        twitter: {
            card: "summary",
            title: social,
            description: appDescription,
            images: botIcon,
        }
    };
}
