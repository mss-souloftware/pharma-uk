/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add the Unsplash domain for external images

    deviceSizes: [320, 420, 768, 1024, 1200], // Configure device sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Sizes for optimized images
  },
};

export default nextConfig;
