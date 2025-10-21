import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'lavittoria.com.tr',
        port: '',
        pathname: '/img/LV.png',
        search: '',
      },
    ],
  },
};

export default nextConfig;
