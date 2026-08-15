import React from "react";
import "../styles/discord.css";

interface MessageProps {
    children?: React.ReactNode;
}

export const Discord = ({ children }: MessageProps) => {
    return (
        <div className="discord-chats w-full rounded-lg overflow-hidden">
            <div className="not-prose w-full bg-[#f1f1f1] dark:bg-[#191919] rounded-xl border dark:border-[#66666633] border-[#cccccc80] py-1 overflow-x-auto my-2">
                {children}
            </div>
        </div>
    );
};
