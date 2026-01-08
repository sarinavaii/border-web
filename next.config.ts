import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "border-plus.s3.ir-thr-at1.arvanstorage.ir",
            },
        ],
    },
};

export default nextConfig;
