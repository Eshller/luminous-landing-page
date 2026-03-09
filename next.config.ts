import type { NextConfig } from "next";

const outputMode =
  process.env.OUTPUT_MODE === "export" ? "export" : "standalone";

const nextConfig: NextConfig = {
  output: outputMode,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
