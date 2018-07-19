import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../css/bootstrap-3.3.7/dist/css/bootstrap.css'
import '../css/bootstrap-override.css'
import '../css/bootstrap-custom-utils.css'
import '../css/salesbury-lilac.css'

import socialPic from '../img/social.png'

import 'prismjs/themes/prism-okaidia.css'
import * as Content from '../Content'

const Layout = ({ children, data }) => (
  <div className="cheatsheet">
    <Helmet>
      <script async src="https://gumroad.com/js/gumroad.js" />

      <meta name="author" content="Swizec Teller" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />

      <meta property="og:url" content="https://learnwhileyoupoop.com" />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta
        property="og:image"
        content={`https://learnwhileyoupoop.com${socialPic}`}
      />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@swizec" />
      <meta name="twitter:creator" content="@swizec" />
      <meta name="twitter:title" content={data.site.siteMetadata.title} />
      <meta
        name="twitter:description"
        content={data.site.siteMetadata.description}
      />
      <meta
        name="twitter:image"
        content={`https://learnwhileyoupoop.com${socialPic}`}
      />

      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    <div className="bg-white-dark padding-small-top" />

    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => <Layout data={data}>{children}</Layout>}
  />
)
