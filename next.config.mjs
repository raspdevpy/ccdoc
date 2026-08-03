import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  // static export has no image optimizer; nginx serves the files as-is
  images: { unoptimized: true },
};

export default withMDX(config);
