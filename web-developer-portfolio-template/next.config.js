// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // keep static export
  images: {
    unoptimized: true,       // disable optimizer for static export
  },
};

module.exports = nextConfig;
