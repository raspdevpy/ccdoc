import React from "react";

interface MenuProps {
    placeholder?: string;
}

export const Menu = ({ placeholder = "Make a selection" }: MenuProps) => {
    return (
        <div className="flex h-8 bg-white dark:bg-[#202023] rounded-lg border border-gray-500/30 py-4 px-2 text-xs items-center cursor-pointer mt-1 mb-0.5 w-full max-w-80 min-w-40">
            {placeholder}
            <div className="h-0 flex-1"></div>›
        </div>
    );
};
