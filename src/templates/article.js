import React from 'react'

import Layout from '../components/layout'
import ResponsivePlayer from '../components/ResponsivePlayer'
import SocialHelmet from '../components/SocialHelmet.js'

import Pagination from '../components/Pagination'
import { FluffySection, LowSection } from '../components/Section'
import { FormControl, Row, Col as Column } from 'react-bootstrap'

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

const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
              url={this.props.url}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <FacebookShareButton url={this.props.url}>
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
