import React from "react";
import { userAvatar } from "@/lib/shared";

interface EmojiProps {
    src?: string;
    id?: string;
    big?: boolean;
}

export const Emoji = ({
    src = userAvatar,
    id = "",
    big = false,
}: EmojiProps) => {
    if (id != "") {
        src = `https://cdn.discordapp.com/emojis/${id}.webp`;
    }

    return (
        <img
            src={src}
            className={`discord-emoji inline align-bottom ${big ? "h-12 w-12" : "h-5.5 w-5.5"}`}
        />
    );
};
