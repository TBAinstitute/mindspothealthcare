/** @type {import('next').NextConfig} */
/**const nextConfig = {};*/

const nextConfig = {
  output: 'standalone',
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true}
};

export default nextConfig;
