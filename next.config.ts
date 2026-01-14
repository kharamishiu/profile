import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Or 'http' if necessary
        hostname: 'images.unsplash.com', // Replace with your domain
        port: '', // Leave empty unless a specific port is required
        // pathname: '/path/to/images/**', // Use wildcards for flexible paths
      },
      // Add more patterns for other domains or paths as needed
    ],
  },
};

export default nextConfig;
