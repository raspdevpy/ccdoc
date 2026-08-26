import React, { Children } from "react";
import "../styles/discord.css";

interface MessageProps {
    children?: React.ReactNode;
}

export const Discord = ({ children }: MessageProps) => {
    return (
        <div className="my-[1.25em]">
            <div className="discord-chats not-prose w-full overflow-hidden rounded-xl">
                <div className="w-full bg-[#f1f1f1] dark:bg-[#191919] rounded-xl border dark:border-[#66666633] border-[#cccccc80] py-2 overflow-x-auto">
                    <div className="table min-w-full">
                        {Children.map(children, (child, i) => (
                            <div className="table-row" key={i}>
                                <div className="table-cell">{child}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
