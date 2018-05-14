module.exports = {
  siteMetadata: {
    title: 'Learn While You Poop',
    description: 'No pressure learning at 2 minutes per day. Start with WHY React all the way to a React 16.3 master in a month.',
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-facebook-analytics',
      options: {
        includeInDevelopment: false,
        appId: '714190382013726',
        debug: false,
        language: 'en_US'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-1464315-30',
        anonymize: true,
        head: false,
        respectDNT: true
      }
    }
  ]
}