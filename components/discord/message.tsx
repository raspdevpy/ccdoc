import React from "react";

interface MessageProps {
    bot?: boolean;
    avatar?: string;
    botAvatar?: string;
    color?: string;
    botColor?: string;
    name?: string;
    botName?: string;
    slash?: string;
    slashUser?: string;
    slashAvatar?: string;
    mention?: boolean;
    ephemeral?: boolean;
    reply?: string;
    replyUser?: string;
    replyAvatar?: string;
    replyColor?: string;
    children?: React.ReactNode;
}

export const Message = ({
    bot = false,
    avatar = "https://cdn.discordapp.com/embed/avatars/0.png",
    botAvatar = "/favicon.svg",
    color = "#a7c7e7",
    botColor = "#0099ff",
    name = "Member",
    botName = "Custom Command",
    slash = "",
    slashUser = "Member",
    slashAvatar = "https://cdn.discordapp.com/embed/avatars/0.png",
    mention = false,
    ephemeral = false,
    reply = "",
    replyUser = "Member",
    replyAvatar = "https://cdn.discordapp.com/embed/avatars/0.png",
    replyColor = "#a7c7e7",
    children = [],
}: MessageProps) => {
    const everything = React.Children.toArray(children);
    const components: React.ReactNode[] = [];
    const message: React.ReactNode[] = [];

    everything.forEach((child) => {
        if (
            React.isValidElement(child) &&
            (child.type as any).name !== "Mention" &&
            (typeof child !== "string" || typeof child !== "number")
        ) {
            components.push(child);
        } else {
            message.push(child);
        }
    });

    return (
        <div className="discord-message-wrapper {{ if $mentionmessage-mentionedend {{ if $ephemeralmessage-ephemeralend">
            <div className="flex shrink-0 flex-col">
                {slash !== "" && reply !== "" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 160 90"
                        className="discord-slash-line"
                    >
                        <path
                            d="M 80 85 L 80 70 A 25 25 0 0 1 105 45 L 200 45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
                <img src="{{ $avatar }}" className="message-pfp" />
            </div>
            <div className="flex flex-col text-zinc-800 dark:text-zinc-300 pr-4 w-full">
                {slash !== "" && (
                    <div className="discord-slash">
                        <img
                            className="rounded-full! m-0 h-4 w-4"
                            src={avatar}
                        />
                        {slashUser} used
                        <div className="discord-slash-view">
                            <svg
                                aria-hidden="true"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M2.06 7.61c-.25.95.31 1.92 1.26 2.18l4.3 1.15c.94.25 1.91-.31 2.17-1.26l1.15-4.3c.25-.94-.31-1.91-1.26-2.17l-4.3-1.15c-.94-.25-1.91.31-2.17 1.26l-1.15 4.3ZM12.98 7.87a2 2 0 0 0 1.75 2.95H20a2 2 0 0 0 1.76-2.95l-2.63-4.83a2 2 0 0 0-3.51 0l-2.63 4.83ZM5.86 13.27a.89.89 0 0 1 1.28 0l.75.77a.9.9 0 0 0 .54.26l1.06.12c.5.06.85.52.8 1.02l-.13 1.08c-.02.2.03.42.14.6l.56.92c.27.43.14 1-.28 1.26l-.9.58a.92.92 0 0 0-.37.48l-.36 1.02a.9.9 0 0 1-1.15.57l-1-.36a.89.89 0 0 0-.6 0l-1 .36a.9.9 0 0 1-1.15-.57l-.36-1.02a.92.92 0 0 0-.37-.48l-.9-.58a.93.93 0 0 1-.28-1.26l.56-.93c.11-.17.16-.38.14-.59l-.12-1.08c-.06-.5.3-.96.8-1.02l1.05-.12a.9.9 0 0 0 .54-.26l.75-.77ZM18.52 13.71a1.1 1.1 0 0 0-2.04 0l-.46 1.24c-.19.5-.57.88-1.07 1.07l-1.24.46a1.1 1.1 0 0 0 0 2.04l1.24.46c.5.19.88.57 1.07 1.07l.46 1.24c.35.95 1.7.95 2.04 0l.46-1.24c.19-.5.57-.88 1.07-1.07l1.24-.46a1.1 1.1 0 0 0 0-2.04l-1.24-.46a1.8 1.8 0 0 1-1.07-1.07l-.46-1.24Z"
                                    className=""
                                ></path>
                            </svg>
                            {slash}
                        </div>
                    </div>
                )}
                {reply !== "" && (
                    <div className="discord-reply">
                        <img
                            className="rounded-full! m-0 h-4 w-4"
                            src={replyAvatar}
                        />
                        <div className="discord-reply-username">
                            @{replyUser}
                        </div>
                        {reply}
                    </div>
                )}

                <div className="flex gap-1.5 items-center">
                    <div
                        className="text-nowrap font-semibold"
                        style={{ color: color }}
                    >
                        {name}
                    </div>
                    {bot && (
                        <div
                            className="px-1 rounded-sm size-fit text-white font-medium"
                            style={{
                                fontSize: "11px",
                                lineHeight: "16.5px",
                                backgroundColor: "rgb(88, 101, 242)",
                            }}
                        >
                            APP
                        </div>
                    )}

                    <div className="text-xss text-gray-500">DATE</div>
                </div>
                {components}
                {ephemeral && (
                    <div className="message-ephemeral-footer">
                        <svg
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M15.56 11.77c.2-.1.44.02.44.23a4 4 0 1 1-4-4c.21 0 .33.25.23.44a2.5 2.5 0 0 0 3.32 3.32Z"
                                className=""
                            ></path>
                            <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                d="M22.89 11.7c.07.2.07.4 0 .6C22.27 13.9 19.1 21 12 21c-7.11 0-10.27-7.11-10.89-8.7a.83.83 0 0 1 0-.6C1.73 10.1 4.9 3 12 3c7.11 0 10.27 7.11 10.89 8.7Zm-4.5-3.62A15.11 15.11 0 0 1 20.85 12c-.38.88-1.18 2.47-2.46 3.92C16.87 17.62 14.8 19 12 19c-2.8 0-4.87-1.38-6.39-3.08A15.11 15.11 0 0 1 3.15 12c.38-.88 1.18-2.47 2.46-3.92C7.13 6.38 9.2 5 12 5c2.8 0 4.87 1.38 6.39 3.08Z"
                                clip-rule="evenodd"
                                className=""
                            ></path>
                        </svg>
                        Only you can see this •
                        <div style={{ color: "dodgerblue", cursor: "pointer" }}>
                            Dismiss message
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
