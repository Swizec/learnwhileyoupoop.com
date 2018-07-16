import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import * as Content from '../Content'
import Layout from '../components/layout'
import { SectionTitle } from '../components/Section'

const StatePage = ({ data }) => {
  return (
    <Layout>
      <Content.Header />
      {/* <Content.Intro /> */}
      <SectionTitle>Module 2: React State Management</SectionTitle>
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
        small
      />
    </Layout>
  )
}

export default StatePage

export const query = graphql`
  query stateVideosAndLessons {
    ytPlaylist(playlistKey: { eq: "state" }) {
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
          fields {
            slug
          }
        }
      }
    }
  }
`
