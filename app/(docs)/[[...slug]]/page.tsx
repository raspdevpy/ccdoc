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
import { appName, gitConfig, botIcon, appDescription } from "@/lib/shared";
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

    return (
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
        },
    };
}
