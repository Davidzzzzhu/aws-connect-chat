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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.connect.aws *.cloudfront.net https://openloop.my.connect.aws; " +
              "connect-src 'self' *.connect.aws *.cloudfront.net https://openloop.my.connect.aws wss://*.connect.aws; " +
              "img-src 'self' data: https: *.connect.aws *.cloudfront.net; " +
              "frame-src 'self' *.connect.aws *.cloudfront.net https://openloop.my.connect.aws; " +
              "style-src 'self' 'unsafe-inline' *.connect.aws *.cloudfront.net; " +
              "font-src 'self' data: *.connect.aws *.cloudfront.net;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;


