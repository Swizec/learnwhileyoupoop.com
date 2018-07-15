import React from 'react'

import Layout from '../components/layout'
import ResponsivePlayer from '../components/ResponsivePlayer'
import SocialHelmet from '../components/SocialHelmet.js'
import ShareDialog from '../components/ShareDialog.js'

import { LowSection } from '../components/Section'
import Pagination from '../components/Pagination'
import { Row, Col as Column } from 'react-bootstrap'

export default ({ data, pathContext }) => {
  const article = data.markdownRemark
  const title = article.frontmatter.title
  const { slug } = pathContext
  const url = `https://learnwhileyoupoop.com/${slug}`

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
      <LowSection>
        <Row>
          <ResponsivePlayer videoId={yt.videoId} />
        </Row>
        <Row>
          <Column md={11} mdOffset={1}>
            <div dangerouslySetInnerHTML={{ __html: article.html }} />
          </Column>
        </Row>
      </LowSection>
      <Pagination pathContext={pathContext} />
      <ShareDialog sharePlaceholder={sharePlaceholder} url={url} />
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery($slug: String!, $videoId: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
