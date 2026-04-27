import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    // Pin workspace root to this project (silences multi-lockfile warning when
    // an unrelated lockfile exists higher up the filesystem).
    root: path.join(__dirname),
  },
};

export default nextConfig;
