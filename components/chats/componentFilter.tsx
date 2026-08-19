import React from "react";
import { Mention, Emoji } from "./index";

export function filterChildren(children: React.ReactNode) {
    const everything = React.Children.toArray(children);
    const components: React.ReactNode[] = [];
    const message: React.ReactNode[] = [];

    const filter = new Set<React.JSXElementConstructor<any>>([Mention, Emoji]);

    everything.forEach((child) => {
        if (!React.isValidElement(child)) {
            message.push(child);
            return;
        }

        if (typeof child.type === "string") {
            message.push(child);
            return;
        }

        if (filter.has(child.type)) {
            message.push(child);
        } else {
            components.push(child);
        }
    });

    return { components, message };
}
