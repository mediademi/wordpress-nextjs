module.exports = {
  async redirects() {
    return [
      {
        source: '/post/:id',
        has: [
          {
            type: 'query',
            key: 'fbclid',
          },
        ],
        permanent: false,
        destination: 'https://intclassmarketing.com/posts/:id',
      },
    ]
  }
}
