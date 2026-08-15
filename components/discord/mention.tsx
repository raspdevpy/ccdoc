import React from "react";

interface MessageProps {
    children?: React.ReactNode;
}

export const Mention = ({ children }: MessageProps) => {
    return <span className="discord-mention">{children}</span>;
};
