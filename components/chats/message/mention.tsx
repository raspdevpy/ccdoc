import React from "react";

interface MentionProps {
    name?: string;
}

export const Mention = ({ name = "Member" }: MentionProps) => {
    return (
        <span className="discord-mention bg-[rgba(78,91,232,0.2)] rounded-sm font-semibold text-xs text-[#1316a5] dark:text-[#97b0df] hover:bg-[rgba(88,101,242,0.6)] cursor-pointer py-0.5 px-1 align-midde">
            @{name}
        </span>
    );
};
