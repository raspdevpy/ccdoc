import React from "react";

interface SeparatorProps {
    big?: boolean;
    invisible?: boolean;
}

export const Separator = ({
    big = false,
    invisible = false,
}: SeparatorProps) => {
    return (
        <div
            className={`flex w-full h-px ${invisible ? "" : "bg-gray-500/30"} ${big ? "my-4" : "my-2"}`}
        ></div>
    );
};
