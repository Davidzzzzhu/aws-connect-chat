/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow loading external scripts from AWS
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.connect.aws *.cloudfront.net;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;


