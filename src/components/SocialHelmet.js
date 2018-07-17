import React from 'react'
import Helmet from 'react-helmet'

export default ({ url, title, description, imageSrc }) => {
  return (
    <Helmet>
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageSrc} />

      {/* Twitter Card tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageSrc} />
    </Helmet>
  )
}
