import React from "react";
import { Button } from "../index";

interface PollProps {
    question?: string;
    votes?: string;
    time?: string;
    closed?: boolean;
    multiple?: boolean;
    children?: React.ReactNode;
}

export const Poll = ({
    question = "What are you up to?",
    time = "120m",
    multiple = false,
    closed = false,
    votes = "0",
    children,
}: PollProps) => {
    return (
        <div className="max-w-108 flex flex-col bg-white dark:bg-[#202023] rounded-lg border border-gray-500/30 p-4 mt-1 mb-0.5 gap-1">
            <div className="font-medium text-[15px]">{question}</div>
            <div className="text-gray-500 text-[12px]">
                {!closed &&
                    (multiple
                        ? "Select one or more answers"
                        : "Select one answer")}
            </div>
            {children}
            <div className="flex mt-1.5 gap-2 text-[12px] items-center ">
                <div>{votes} votes</div>
                <div className="text-black/50 dark:text-white/50">•</div>
                {!closed && (
                    <div className="text-black/50 dark:text-white/50">
                        {time} left
                    </div>
                )}
                {closed && <div>Poll closed</div>}
                <div className="flex-1"></div>
                {!closed && (
                    <>
                        Show results
                        <Button label="Vote" color="blue" inline />
                    </>
                )}
            </div>
        </div>
    );
};
