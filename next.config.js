module.exports = {
  async redirects() {
    return [
      {
        source: '/post/',
        permanent: false,
        destination: 'https://intclassmarketing.com/posts/',
      },
    ]
  }
}
