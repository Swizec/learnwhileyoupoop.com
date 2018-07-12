import React from 'react'

import Layout from '../components/layout'
import ResponsivePlayer from '../components/ResponsivePlayer'

import { FluffySection, LowSection } from '../components/Section'
import { Pager, Row, FormControl, Col as Column } from 'react-bootstrap'

import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from 'react-share'
import Signature from '../img/signature.gif'
import { MiddleColumn } from '../components/Columns'

import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'

import { Link } from 'gatsby'

const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const BuySection = styled.div`
  margin-top: 4rem;
  text-align: center;

  @media (max-width: 720px) {
    width: 95%;
  }
`

class ShareDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sharePlaceholder: props.sharePlaceholder,
    }
  }

  handleChange = event => {
    this.setState({ sharePlaceholder: event.target.value })
  }

  render() {
    return (
      <FluffySection>
        <MiddleColumn>
          <p style={{ textAlign: 'center' }}>
            Know someone who wants to learn React and its whole ecosystem? Share
            👇
          </p>
          <CenteredDiv>
            <FormControl
              componentClass={Textarea}
              style={{
                textAlign: 'center',
                width: '500px',
                minHeight: '8rem',
                fontSize: '1.5rem',
              }}
              value={this.state.sharePlaceholder}
              onChange={this.handleChange}
            />
          </CenteredDiv>
          <br />
          <CenteredDiv>
            <TwitterShareButton
              via="swizec"
              title={this.state.sharePlaceholder}
              url={`https://learnwhileyoupoop.com/${this.props.slug}`}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <FacebookShareButton
              url={`https://learnwhileyoupoop.com/${this.props.slug}`}
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </CenteredDiv>
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
    )
  }
}

export default ({ data, pathContext }) => {
  const article = data.markdownRemark
  const title = article.frontmatter.title
  const { slug, prevSlug, nextSlug, prevTitle, nextTitle } = pathContext

  const sharePlaceholder = `Here's a great lesson I just learned from @swizec: '${title}' · It's a ⏱ 2min 🎥 + an in-depth article 🔥 · Best company for the 🚽😅`

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
      <ShareDialog sharePlaceholder={sharePlaceholder} slug={slug} />
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
