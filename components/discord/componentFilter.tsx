import React from "react";
import { Mention } from "../discord/mention";

export function filterChildren(children: React.ReactNode) {
    const everything = React.Children.toArray(children);
    const components: React.ReactNode[] = [];
    const message: React.ReactNode[] = [];

    everything.forEach((child) => {
        if (!React.isValidElement(child)) {
            message.push(child);
            return;
        }

        if (typeof child.type === "string") {
            message.push(child);
            return;
        }

        if (child.type === Mention) {
            message.push(child);
        } else {
            components.push(child);
        }
    });

    return { components, message };
}
