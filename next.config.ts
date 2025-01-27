import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/landing", // Replace "landing" with your repository name
  assetPrefix: "/landing/", // Same as basePath
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
