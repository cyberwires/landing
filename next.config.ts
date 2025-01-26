import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = "";
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  repo = `/${repoName}`;
}

const nextConfig: NextConfig = {
  /* config options here */
  basePath: repo || "",
  assetPrefix: repo || "",
  images: {
    // remotePatterns: [
    //   {
    //     hostname: "localhost",
    //   },
    // ],
    unoptimized: true,
  },
};

export default nextConfig;
