/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pokemontcg.io',
            port: '',
            pathname: '/**',
            search: '',
          },
        ],
      },

};

export default nextConfig;
