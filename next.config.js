/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // ==> FOR DEVELOPMENT ONLY ==>
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      // <== FOR DEVELOPMENT ONLY <==
    ],
  },
};

module.exports = nextConfig;
