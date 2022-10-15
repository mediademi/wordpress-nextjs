module.exports = {
  async redirects() {
    return [
      {
        source: '/post/:path*',
        has: [
          {
            type: 'query',
            key: 'fbclid',
            value: undefined,
          },
        ],
        permanent: false,
        destination: 'https://intclassmarketing.com/posts/:path*',
      },
    ]
  }
}
