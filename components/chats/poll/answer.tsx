import React from "react";

interface AnswerProps {
    text?: string;
    multiple?: boolean;
    closed?: boolean;
    votes?: string;
    percent?: string;
    win?: boolean;
    emoji?: string;
}

export const Answer = ({
    text = "",
    multiple = false,
    closed = false,
    votes = "0",
    percent = "0%",
    win = false,
    emoji = "",
}: AnswerProps) => {
    const type = multiple ? "checkbox" : "radio";
    const styles = win
        ? {
              border: "rgba(50, 255, 50, 0.5) solid 1px",
              backgroundColor: "rgba(50, 255, 50, 0.05)",
          }
        : {};

    return (
        <label className="discord-poll-answer" style={styles}>
            <div className="text-[20px]">{emoji}</div>
            {text}
            <div className="flex-1"></div>
            {!closed && <input type={type} name="option" />}
            {closed && (
                <>
                    <div className="text-[12px] text-nowrap">{votes} votes</div>
                    <div className="font-semibold text-[16px]">{percent}</div>
                </>
            )}

            {win && (
                <svg
                    style={{ flexShrink: 0 }}
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="10" fill="white"></circle>
                    <path
                        fill="green"
                        fillRule="evenodd"
                        d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm5.7-13.3a1 1 0 0 0-1.4-1.4L10 14.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l7-7Z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            )}
        </label>
    );
};
