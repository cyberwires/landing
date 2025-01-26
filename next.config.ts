import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
