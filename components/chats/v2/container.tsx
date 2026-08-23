import React from "react";

interface ContainerProps {
    color?: string;
    children?: React.ReactNode;
}

export const Container = ({
    color = "transparent",
    children = [],
}: ContainerProps) => {
    return (
        <div className="discord-container flex max-w-lg self-start rounded-md bg-white dark:bg-[#202023] gap-2 pr-3.5 overflow-hidden border border-gray-500/30 mt-1 mb-0.5">
            <div
                className="border-none w-1 shrink-0"
                style={{ backgroundColor: color }}
            ></div>
            <div className="flex flex-col py-1 min-w-0">{children}</div>
        </div>
    );
};
