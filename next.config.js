/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  unoptimized: true,
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  
};

module.exports = nextConfig;

// redirects: async () => [
//   {
//     source: "/:path*",
//     has: [{ type: "host", value: "www.skywarddigital.com.au" }],
//     destination: "https://skywarddigital.com.au/:path*",
//     permanent: true,
//   },
// ],


// If above rewrite doesn't work

// async rewrites() {
//     return [
//       {
//         source: '/:path*',
//         destination: '/:path*',
//         permanent: true,
//         headers: [
//           {
//             key: 'Location',
//             value: 'https://example.com/:path*',
//           },
//         ],
//         conditions: [
//           {
//             key: 'Host',
//             value: 'www.example.com',
//           },
//         ],
//       },
//       {
//         source: '/:path*/',
//         destination: '/:path*',
//         permanent: true,
//         conditions: [
//           {
//             key: 'Path',
//             value: /.+\/$/,
//           },
//         ],
//       },
//     ];
//   },
