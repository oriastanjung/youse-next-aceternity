/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'aceternity.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'user-images.githubusercontent.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'code.visualstudio.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
