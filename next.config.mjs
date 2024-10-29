/** @type {import('next').NextConfig} */
const nextConfig = {
   compiler: { styledComponents: { displayName: process.env.NODE_ENV !== 'production' } },
   images: {
      remotePatterns: [
         {
           protocol: 'https',
           hostname: 'randomuser.me',
         },
       ],
    },
};

export default nextConfig;
