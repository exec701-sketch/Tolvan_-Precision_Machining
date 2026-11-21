import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: deployed to Cloudflare as static assets (see wrangler.jsonc). Output goes to ./out
  output: "export",
  // No image optimization server on a static host; logo is pre-trimmed in public/brand.
  images: { unoptimized: true },
  // cacheComponents / partialPrefetching removed: partial prerendering is not supported in export mode.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
