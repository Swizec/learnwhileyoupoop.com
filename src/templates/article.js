import React from 'react'

import Layout from '../components/layout'
import ResponsivePlayer from '../components/ResponsivePlayer'
import SocialHelmet from '../components/SocialHelmet.js'
import ShareDialog from '../components/ShareDialog.js'

import Pagination from '../components/Pagination'
import { Row, Column } from '../components/Grid'

export default ({ data, pathContext }) => {
  const article = data.markdownRemark
  const title = article.frontmatter.title
  const { pagePath } = pathContext
  const url = `https://learnwhileyoupoop.com${pagePath}`

  const yt = data.ytVideo

  const sharePlaceholder = `Here's a great lesson I just learned from @swizec: '${title}' · It's a ⏱ 2min 🎥 + an in-depth article 🔥 · Best company for the 🚽😅`
  return (
    <Layout>
      <SocialHelmet
        url={url}
        title={yt.title}
        description={yt.description}
        imageSrc={yt.thumbnails.high.url}
      />
      <Pagination pathContext={pathContext} small />

      <Row>
        <Column
          md={12}
          mdOffset={0}
          style={{ marginLeft: -15, marginRight: -15 }}
        >
          <ResponsivePlayer videoId={yt.videoId} />
        </Column>
      </Row>
      <Row>
        <Column md={11} mdOffset={1}>
          <div dangerouslySetInnerHTML={{ __html: article.html }} />
        </Column>
      </Row>

      <Pagination pathContext={pathContext} />
      <ShareDialog sharePlaceholder={sharePlaceholder} url={url} />
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery($pagePath: String!, $videoId: String!) {
    markdownRemark(fields: { pagePath: { eq: $pagePath } }) {
      html
      frontmatter {
        title
      }
    }
    ytVideo(videoId: { eq: $videoId }) {
      title
      videoId
      thumbnails {
        high {
          url
          width
          height
        }
      }
      description
    }
  }
`
