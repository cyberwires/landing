import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true, domains: ["vertex-solutions-ua.netlify.app"] },
};

export default nextConfig;
