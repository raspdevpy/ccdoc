import React from "react";

interface MessageProps {
    children?: React.ReactNode;
}

export const Discord = ({ children }: MessageProps) => {
    return (
        <div className="w-full rounded-lg overflow-hidden">
            <div className="discord-chats w-full bg-gray-200 dark:bg-[#202024] rounded-lg border border-slate-400/30 py-1 overflow-x-auto">
                {children}
            </div>
        </div>
    );
};
