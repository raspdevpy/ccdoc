import React from "react";
import { filterChildren } from "@/components/chats/componentFilter";

interface EmbedProps {
    color?: string;
    author?: string;
    authorAvatar?: string;
    title?: string;
    footer?: string;
    footerImage?: string;
    image: string;
    children?: React.ReactNode;
}

export const Embed = ({
    color = "rgba(128, 128, 128, 0.5)",
    author = "",
    authorAvatar = "",
    title = "",
    footer = "",
    footerImage = "",
    image = "",
    children = [],
}: EmbedProps) => {
    const { components, message } = filterChildren(children);

    return (
        <div className="discord-embed flex max-w-lg self-start rounded-lg bg-white dark:bg-[#202023] gap-2 pr-3.5 overflow-hidden border border-gray-500/30 mt-1 mb-0.5">
            <div
                className="border-none w-1 shrink-0"
                style={{ backgroundColor: color }}
            ></div>
            <div className="flex flex-col py-3">
                {(author !== "" || authorAvatar !== "") && (
                    <div className="embed-author">
                        {authorAvatar !== "" && <img src={authorAvatar} />}
                        {author !== "" && author}
                    </div>
                )}

                {title !== "" && (
                    <div className="font-semibold text-sm mb-1 leading-4">
                        {title}
                    </div>
                )}
                <div className="prose text-xs my-px leading-4.5">{message}</div>
                {components}
                {image != "" && <img src={image} />}
                {(footer !== "" || footerImage !== "") && (
                    <div className="flex items-center gap-1.5 mt-1 min-h-0 text-xxs">
                        {footerImage !== "" && (
                            <img
                                className="rounded-full! w-5 h-5"
                                src={footerImage}
                            />
                        )}
                        {footer !== "" && footer}
                    </div>
                )}
            </div>
        </div>
    );
};
