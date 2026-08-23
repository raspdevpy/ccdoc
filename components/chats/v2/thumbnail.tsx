import React from "react";
import { userAvatar } from "@/lib/shared";

interface ThumbnailProps {
    src?: string;
}

export const Thumbnail = ({ src = userAvatar }: ThumbnailProps) => {
    return (
        <img
            className="w-full h-full rounded-md mx-0! my-1! max-h-21 max-w-21"
            src={src}
        />
    );
};
