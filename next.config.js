module.exports = {
  async redirects() {
    return [
      {
        source: '/post/',
        has: [
          {
            type: 'query',
            key: 'fbclid',
          },
        ],
        permanent: false,
        destination: 'https://intclassmarketing.com/posts/',
      },
    ]
  }
}
