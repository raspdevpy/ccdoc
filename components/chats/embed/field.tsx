import React from "react";

interface MessageProps {
    title?: string;
    inline?: boolean;
    children?: React.ReactNode;
}

export const Field = ({
    children,
    title = "",
    inline = false,
}: MessageProps) => {
    return (
        <>
            <div className={`${!inline ? "basis-full" : ""} h-0`}></div>
            <div className="mr-2 mt-0.5">
                <div className="text-sm font-semibold">{title}</div>
                <div className="prose text-xs">{children}</div>
            </div>
        </>
    );
};
