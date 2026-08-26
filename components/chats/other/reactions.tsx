import { userAvatar } from "@/lib/shared";
import React from "react";

interface ReactionsProps {
    children?: React.ReactNode;
}

interface ReactionProps {
    image?: string;
    count?: number;
    active?: boolean;
}

export const Reactions = ({ children = [] }: ReactionsProps) => {
    return (
        <div className="flex flex-row flex-wrap gap-1 mt-0.5 mb-1">
            {children}
        </div>
    );
};

export const Reaction = ({
    image = userAvatar,
    count = 1,
    active = false,
}: ReactionProps) => {
    return (
        <div
            className={`flex flex-row text-sm border ${active ? "bg-blue-500/10 border-blue-500/50" : "bg-gray-500/10"} w-12 h-7 py-px px-1.5 rounded-lg items-center justify-between cursor-pointer`}
        >
            <img src={image} width="20px" />
            {count}
        </div>
    );
};
