import React from 'react'

import Layout from '../components/layout'
import ResponsivePlayer from '../components/ResponsivePlayer'

import Pagination from '../components/Pagination'
import { Row, Col as Column } from 'react-bootstrap'
import { FluffySection, LowSection } from '../components/Section'

import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from 'react-share'
import Signature from '../img/signature.gif'
import { MiddleColumn } from '../components/Columns'

export default ({ data, pathContext }) => {
  const article = data.markdownRemark

  return (
    <Layout>
      <Pagination pathContext={pathContext} small />
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
      <Pagination pathContext={pathContext} />
      <FluffySection>
        <MiddleColumn>
          <p>
            Know someone who wants to learn React and its whole ecosystem? Share
            👇
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TwitterShareButton
              via="swizec"
              title="Do you buy more books than you read? Learn while you poop! Learn React and its ecosystem in 2 minutes per day /@swizec"
              url="https://learnwhileyoupoop.com"
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <FacebookShareButton
              title="Do you buy more books than you read? Learn while you poop! Learn React and its ecosystem in 2 minutes per day /@swizec"
              url="https://learnwhileyoupoop.com"
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </div>
          <p>
            Cheers,<br />
            ~Swizec<br />
            <img
              src={Signature}
              style={{ width: '200px', margin: '1.5em 0' }}
            />
          </p>
        </MiddleColumn>
      </FluffySection>
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
