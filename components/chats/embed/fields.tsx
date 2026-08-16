import React from "react";

interface MessageProps {
    children?: React.ReactNode;
}

export const Fields = ({ children }: MessageProps) => {
    return <div className="flex flex-row flex-wrap my-1">{children}</div>;
};
