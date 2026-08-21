import React from "react";

interface AttachmentProps {
    name?: string;
    size?: string;
}

export const Attachment = ({
    name = "File",
    size = "1 MB",
}: AttachmentProps) => {
    return (
        <div className="flex h-18 w-full max-w-108 mt-1 mb-0.5 items-center p-4 border border-gray-500/30 bg-white dark:bg-[#202023] rounded-lg cursor-pointer min-w-40">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                className="flex items-center p-0"
            >
                <title>file</title>
                <path
                    fill="currentColor"
                    d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                />
            </svg>
            <div className="flex flex-col">
                <div className="text-blue-500 text-sm">{name}</div>
                <div className="text-gray-500/50 text-xs">{size}</div>
            </div>
        </div>
    );
};
