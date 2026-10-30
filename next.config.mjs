import { createMDX } from "fumadocs-mdx/next";
import os from "node:os";

const withMDX = createMDX();

/** @type {import("next").NextConfig} */
const config = {
    output: "export",
    basePath: process.env.BASE_URL??"/",
    reactStrictMode: true,
    images: { unoptimized: true },
    allowedDevOrigins: ['*.trycloudflare.com'],
    experimental: {
        ...(process.env.USE_ALL_CPU == 'true'?{cpus: os.cpus().length}:{})
    },
};

export default withMDX(config);
