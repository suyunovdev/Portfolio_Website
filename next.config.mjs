/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "eu-cap-network.ec.europa.eu", // 1-rasmning domeni
      "imageio.forbes.com", // 2-3-4-rasmlar domeni
      "kslux.uz", // 6-rasmning domeni
    ],
  },
};

export default nextConfig;
