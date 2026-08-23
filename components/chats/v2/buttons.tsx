import React from "react";

interface RButtonsProps {
    children?: React.ReactNode;
}

export const RButtons = ({ children }: RButtonsProps) => {
    return (
        <div className="flex flex-row flex-wrap gap-0.5 mt-0.5 mb-1 justify-end">
            {children}
        </div>
    );
};
