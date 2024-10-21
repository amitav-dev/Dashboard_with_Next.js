/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:"xetaravel.com"
      },
    ],
  },
};

export default nextConfig;
