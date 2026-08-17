import React from "react";

interface MessageProps {
    src?: string;
    id?: number;
    big?: boolean;
}

export const Emoji = ({
    src = "https://cdn.discordapp.com/embed/avatars/0.png",
    id = 0,
    big = false,
}: MessageProps) => {
    if (id > 0) {
        src = `https://cdn.discordapp.com/emojis/${id}.webp`;
    }

    return (
        <img
            src={src}
            className={`discord-emoji inline align-bottom ${big ? "h-12 w-12" : "h-5.5 w-5.5"}`}
        />
    );
};
