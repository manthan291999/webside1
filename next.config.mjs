/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export', // Static export for Cloudflare Pages direct upload
    trailingSlash: true,
    images: {
        unoptimized: true, // Required for static export
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
            },
            {
                protocol: 'https',
                hostname: 'portfolio-assets-manthan291999.s3.ap-south-1.amazonaws.com',
            },
            {
                protocol: 'https',
                hostname: '*.s3.*.amazonaws.com',
            },
        ],
    },
};

export default nextConfig;
