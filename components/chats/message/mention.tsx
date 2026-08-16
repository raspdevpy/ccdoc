import React from "react";

interface MessageProps {
    name?: string;
}

export const Mention = ({ name = "Member" }: MessageProps) => {
    return (
        <span className="bg-[rgba(78,91,232,0.2)] rounded-sm font-semibold text-xs text-[#1316a5] dark:text-[#97b0df] hover:bg-[rgba(88,101,242,0.6)] align-middle cursor-pointer py-0.5 px-1">
            @{name}
        </span>
    );
};
