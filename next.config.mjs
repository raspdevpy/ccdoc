import { createMDX } from "fumadocs-mdx/next";
import os from "node:os";

const withMDX = createMDX();

/** @type {import("next").NextConfig} */
const config = {
    output: "export",
    reactStrictMode: true,
    images: { unoptimized: true },
    experimental: {
        cpus: os.cpus().length,
    },
};

export default withMDX(config);
