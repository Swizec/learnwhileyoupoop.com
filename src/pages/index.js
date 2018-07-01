import React from 'react'
import { graphql } from 'gatsby'

import * as Content from '../Content'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  return (
    <Layout>
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
    </Layout>
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
