import React from 'react'

import Layout from '../components/layout'
import ResponsivePlayer from '../components/ResponsivePlayer'

import { LowSection, SectionTitle } from '../components/Section'
import { Row, Col as Column } from 'react-bootstrap'

export default ({ data }) => {
  const article = data.markdownRemark

  return (
    <Layout>
      <LowSection>
        <Row>
          <ResponsivePlayer videoId={article.frontmatter.videoId} />
        </Row>
        <Row>
          <Column md={11} mdOffset={1}>
            <div dangerouslySetInnerHTML={{ __html: article.html }} />
          </Column>
        </Row>
      </LowSection>
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        videoId
        title
      }
    }
  }
`
