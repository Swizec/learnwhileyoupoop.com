import React from 'react'

import Layout from '../components/layout'
import ResponsivePlayer from '../components/ResponsivePlayer'

import { FluffySection, LowSection } from '../components/Section'
import { Pager, Row, Col as Column } from 'react-bootstrap'

import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from 'react-share'
import Signature from '../img/signature.gif'
import { MiddleColumn } from '../components/Columns'

import styled from 'styled-components'

import { Link } from 'gatsby'

const BuySection = styled.div`
  margin-top: 4rem;
  text-align: center;

  @media (max-width: 720px) {
    width: 95%;
  }
`

export default ({ data, pathContext }) => {
  const article = data.markdownRemark
  const { prevSlug, nextSlug, prevTitle, nextTitle } = pathContext

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
            &larr;&nbsp;Previous lesson: {prevTitle}
          </Pager.Item>
        )}
        {nextSlug && (
          <Pager.Item
            href={'/' + nextSlug}
            componentClass={Link}
            to={'/' + nextSlug}
          >
            Next lesson:&nbsp;{nextTitle}&nbsp;&rarr;
          </Pager.Item>
        )}
      </Pager>
      <BuySection>
        <a href="https://gum.co/UVcfs" className="gumroad-button">
          Pre-order Module 1 for $29
        </a>
        <br />
        <small>Companion articles/exercises coming May 2018</small>
        <br />
        <br />or <br />
        <a href="https://gum.co/mDSp" className="gumroad-button">
          Get everything for $19/month
        </a>
        <br />
        <small>New content daily</small>
      </BuySection>
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
