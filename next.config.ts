import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // TypeScript 7 has no JavaScript compiler API, so `next build` has to run
    // the project-local `tsc` CLI instead of loading the API in-process.
    useTypeScriptCli: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "portfolio-api-ten-delta.vercel.app" },
      { protocol: "https", hostname: "img.logo.dev" },
    ],
  },
};

export default nextConfig;
