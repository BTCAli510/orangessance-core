import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/package",
        destination: "https://baseiq.app/partners",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
