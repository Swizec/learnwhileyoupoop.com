import React from 'react'

import Layout from '../components/layout'
import ResponsivePlayer from '../components/ResponsivePlayer'

import { LowSection } from '../components/Section'
import { Pager, Row, Col as Column } from 'react-bootstrap'

import { Link } from 'gatsby'

export default ({ data, pathContext }) => {
  const article = data.markdownRemark
  const { prevSlug, nextSlug } = pathContext

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
      <Pager>
        <p>👓&nbsp;Keep on learnin'&nbsp;👓</p>
        {prevSlug && (
          <Pager.Item
            href={'/' + prevSlug}
            componentClass={Link}
            to={'/' + prevSlug}
          >
            &larr;&nbsp;Previous article
          </Pager.Item>
        )}
        {nextSlug && (
          <Pager.Item
            href={'/' + nextSlug}
            componentClass={Link}
            to={'/' + nextSlug}
          >
            Next article&nbsp;&rarr;
          </Pager.Item>
        )}
      </Pager>
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
