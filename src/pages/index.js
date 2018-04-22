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

const IndexPage = () => (
  <div>
    <div className="bg-white-dark padding-small-top" />
    {/* <LowSection>
      <Content.Header />
      <Column md={10} mdOffset={1}>
        <Testimonial which="paulo" />
      </Column>
    </LowSection> */}
    <Content.Footer />
  </div>
)

export default IndexPage
