module.exports = {
  async redirects() {
    return [
      {
        source: '/post/:path*',
        has: [
          {
            type: 'query',
            key: 'fbclid'
          }
        ],
        permanent: false,
        destination: 'https://portalimomenti.com/posts/:path*',
      },
    ]
  }
}
