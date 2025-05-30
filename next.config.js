const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "react-syntax-highlighter",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bobsburgers-api.herokuapp.com",
      },
      {
        protocol: "https",
        hostname: "cdn.buymeacoffee.com",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
