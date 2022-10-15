module.exports = {
  async redirects() {
    return [
      {
        source: '/post/:id',
        permanent: false,
        destination: 'https://intclassmarketing.com/posts/:id',
      },
    ]
  }
}
