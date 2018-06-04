module.exports = {
  siteMetadata: {
    title: 'LEARN WHILE YOU POOP',
    description:
      '👉 No pressure learning at 2 minutes per day. Start with the basics,become a React 16.3 master',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-facebook-analytics',
      options: {
        includeInDevelopment: false,
        appId: '714190382013726',
        debug: false,
        language: 'en_US',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-1464315-30',
        anonymize: true,
        head: false,
        respectDNT: true,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/articles/`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-code-repls`,
            options: {
              externals: [
                'https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js',
              ],
              dependencies: [],
              codesandbox: ['react', 'react-dom'],
              html: '<div id="root"></div>',
              directory: `${__dirname}/exercises/`,
              target: '_blank',
            },
          },
        ],
      },
    },
  ],
}
