module.exports = {
  serverRuntimeConfig: {
    // This will only be available on the server-side
    baseUrl: 'https://www.telegrafi.com'
  },
  publicRuntimeConfig: {
    // This will be available on both the server-side and the client-side
    redirectUrl: '/redirect'
  },
  webpack: (config) => {
    // Add a custom `RedirectFromFacebook` middleware to the server bundle
    config.server.middleware.push('RedirectFromFacebook');

    // Return the modified config object
    return config;
  }
};

// Custom middleware function to redirect the user if they came from facebook.com
function RedirectFromFacebook(req, res, next) {
  // Check if the user's referrer is facebook.com
  if (req.headers.referer && req.headers.referer.startsWith('https://facebook.com')) {
    // Redirect the user to the specified URL
    res.writeHead(301, {Location: `${this.publicRuntimeConfig.baseUrl}${this.publicRuntimeConfig.redirectUrl}`});
    res.end();
  } else {
    // Continue to the next middleware function
    next();
  }
}
