/** @type {import('next').NextConfig} */
const nextConfig = {
   compiler: { styledComponents: { displayName: process.env.NODE_ENV !== 'production' } },
   images: {
      domains: ['randomuser.me'],
    },
};

export default nextConfig;
