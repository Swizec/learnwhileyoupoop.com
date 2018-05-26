import React from 'react'
import Link from 'gatsby-link'

import { Col as Column } from 'react-bootstrap'
import Section, {
  LowSection,
  DarkSection,
  SectionTitle,
  GreenSection,
} from '../components/Section'

import * as Content from '../Content'

const IndexPage = ({ data }) => {
  return (
    <div>
      <div className="bg-white-dark padding-small-top" />
      <Content.Header />
      <Content.Intro />
      <Content.Curriculum
        videos={data.ytPlaylist.childrenYtVideo}
        articles={
          new Map(
            data.allMarkdownRemark.edges.map(({ node }) => [
              node.frontmatter.videoId,
              node,
            ])
          )
        }
      />
      <Content.Footer />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query articlesAndLwypPlaylist {
    ytPlaylist(id: { eq: "lwypPlaylist" }) {
      childrenYtVideo {
        id
        videoId
        title
        description
      }
    }

    allMarkdownRemark(filter: { frontmatter: { videoId: { ne: "" } } }) {
      edges {
        node {
          html
          frontmatter {
            videoId
          }
        }
      }
    }
  }
`
