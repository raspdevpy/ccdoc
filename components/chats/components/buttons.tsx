import React from "react";

interface MessageProps {
    children?: React.ReactNode;
}

export const Buttons = ({ children }: MessageProps) => {
    return (
        <div className="flex flex-row flex-wrap gap-0.5 mt-0.5 mb-1">
            {children}
        </div>
    );
};
