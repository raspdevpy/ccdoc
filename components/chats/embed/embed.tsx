import React from "react";
import { filterChildren } from "@/components/chats/componentFilter";
import { userAvatar } from "@/lib/shared";

interface EmbedProps {
    color?: string;
    author?: string;
    authorAvatar?: string;
    authorUrl?: string;
    title?: string;
    url?: string;
    footer?: string;
    footerImage?: string;
    image?: string;
    thumbnail?: string;
    children?: React.ReactNode;
}

export const Embed = ({
    color = "rgba(128, 128, 128, 0.5)",
    author = "",
    authorAvatar = "",
    authorUrl = "",
    title = "",
    url = "",
    footer = "",
    footerImage = "",
    image = "",
    thumbnail = "",
    children = [],
}: EmbedProps) => {
    const { components, message } = filterChildren(children);
    const memberReplace = [authorAvatar, image, thumbnail];
    memberReplace.forEach((item, i) => {
        if (item === "member") {
            memberReplace[i] = userAvatar;
        }
    });

    return (
        <div className="[&_.discord-emoji]:size-4.5! flex max-w-lg self-start rounded-lg bg-white dark:bg-[#202023] gap-2 pr-3.5 overflow-hidden border border-gray-500/30 mt-1 mb-0.5">
            <div
                className="border-none w-1 shrink-0"
                style={{ backgroundColor: color }}
            ></div>
            <div className="flex flex-col py-2">
                {(author !== "" || authorAvatar !== "") && (
                    <div className="flex flex-row font-semibold text-sm gap-1.25 items-center mb-1.25">
                        {authorAvatar !== "" && (
                            <img
                                src={memberReplace[0]}
                                className="rounded-full size-5.5 m-0"
                            />
                        )}
                        {author !== "" && authorUrl !== "" ? (
                            <a>{author}</a>
                        ) : (
                            author
                        )}
                    </div>
                )}

                {title !== "" && (
                    <div className="font-semibold text-sm mb-1 mt-1 leading-4">
                        {url !== "" ? <a>{title}</a> : title}
                    </div>
                )}
                <div className="prose text-xs my-px leading-4.5 *:first:mt-0!">
                    {message}
                </div>
                {components}
                {image !== "" && <img src={memberReplace[1]} />}
                {(footer !== "" || footerImage !== "") && (
                    <div className="flex items-center gap-1.5 mt-1 mb-1 min-h-0 text-xxs">
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
            {thumbnail !== "" && (
                <img
                    src={memberReplace[2]}
                    className="my-3 rounded-sm max-w-20 max-h-20"
                />
            )}
        </div>
    );
};
