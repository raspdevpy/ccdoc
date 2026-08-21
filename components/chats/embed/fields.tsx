import React from "react";

interface FieldsProps {
    children?: React.ReactNode;
}

export const Fields = ({ children }: FieldsProps) => {
    return <div className="flex flex-row flex-wrap my-1">{children}</div>;
};
