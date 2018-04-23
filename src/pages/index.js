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
  console.log(data)
  return (
    <div>
      <div className="bg-white-dark padding-small-top" />
      <Content.Header />
      <Content.Intro />
      <Content.Curriculum videos={data.ytPlaylist.childrenYtVideo} />
      {/* <Content.Curriculum /> */}
      <Content.Footer />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query LwypPlaylist {
    ytPlaylist(id: { eq: "lwypPlaylist" }) {
      childrenYtVideo {
        id
        title
        description
      }
    }
  }
`
