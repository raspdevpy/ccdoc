import defaultMdxComponents from "fumadocs-ui/mdx";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import type { MDXComponents } from "mdx/types";
import type { ComponentProps, ComponentType } from "react";
import { Badge, Tag } from "@/components/badge";
import { Arg } from "@/components/arg";
import * as Discord from "@/components/discord";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

const NextImage = defaultMdxComponents.img as ComponentType<
    ComponentProps<"img">
>;

const Image = ({
    className,
    src,
    width,
    height,
    ...props
}: ComponentProps<"img">) => {
    const classes = ["rounded-lg", className].filter(Boolean).join(" ");

    const resolvedSrc = typeof src === "string" ? src : (src as any)?.src;
    const resolvedWidth = width || (src as any)?.width;
    const resolvedHeight = height || (src as any)?.height;

    if (resolvedWidth && resolvedHeight) {
        return (
            <ImageZoom
                {...props}
                src={resolvedSrc}
                width={resolvedWidth}
                height={resolvedHeight}
                className={classes}
            />
        );
    }

    return (
        <img
            {...props}
            src={resolvedSrc}
            className={classes}
            loading="lazy"
            decoding="async"
        />
    );
};

export function getMDXComponents(components?: MDXComponents) {
    return {
        ...defaultMdxComponents,
        img: Image,
        Accordion,
        Accordions,
        Badge,
        Tag,
        Arg,
        ...Discord,
        ...components,
    } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
    type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
