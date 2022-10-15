module.exports = {
  async redirects() {
    return [
      {
        source: '/post/',
        has: [
          {
            type: 'query',
            key: 'fbclid',
            value: '123',
          },
        ],
        permanent: false,
        destination: 'https://intclassmarketing.com/posts/',
      },
    ]
  }
}
