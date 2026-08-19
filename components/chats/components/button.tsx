import React from "react";

interface MessageProps {
    label?: string;
    color?: "blue" | "green" | "red" | "gray";
    inline?: boolean;
    url?: string;
    image?: string;
}

export const Button = ({
    label = "",
    color = "blue",
    inline = false,
    url = "",
    image = "",
}: MessageProps) => {
    const colors = {
        blue: "#5865F2",
        green: "#008545",
        red: "#D22D39",
        gray: "#97979F1F",
    };

    if (url != "") {
        color = "gray";
    }

    const seeThrough = color == "gray" ? true : false;
    const styleColor = colors[color];

    return (
        <>
            <div className={`${inline ? "" : "basis-full"} h-0`}></div>
            {url == "" && (
                <div
                    className={`flex w-fit min-w-15 h-8 py-px px-2 rounded-lg items-center justify-center border border-gray-400/20 cursor-pointer font-medium text-sm gap-1.5 ${seeThrough ? "dark:text-white text-black" : "text-white"}`}
                    style={{ backgroundColor: styleColor }}
                >
                    {image != "" && (
                        <img
                            className="w-4.5 h-4.5 m-0! rounded-none!"
                            src={image}
                        />
                    )}
                    {label}
                </div>
            )}

            {url != "" && (
                <a
                    className="flex w-fit min-w-15 h-8 py-px px-3 rounded-lg items-center justify-center border border-gray-400/20 cursor-pointer font-medium text-sm gap-1.5 no-underline dark:text-white text-black"
                    href={url}
                    target="_blank"
                    style={{ backgroundColor: styleColor }}
                >
                    {image != "" && (
                        <img
                            className="w-4.5 h-4.5 m-0! rounded-none!"
                            src={image}
                        />
                    )}
                    {label}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        <title>link</title>
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
                        />
                    </svg>
                </a>
            )}
        </>
    );
};
