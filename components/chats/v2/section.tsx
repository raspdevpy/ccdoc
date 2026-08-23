import React from "react";
import { filterChildren } from "../componentFilter";

interface SectionProps {
    children?: React.ReactNode;
}

export const Section = ({ children }: SectionProps) => {
    const { components, message } = filterChildren(children);
    return (
        <div className="flex flex-row gap-2 justify-between items-center">
            {message.length > 0 && (
                <div className="text-xs my-px mb-0.5 prose">{message}</div>
            )}
            {components}
        </div>
    );
};
