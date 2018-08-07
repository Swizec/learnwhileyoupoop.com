import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const TitleLink = styled(Link)`
  &:link,
  &:visited,
  &:hover,
  &:active {
    border-bottom-style: none;
    color: inherit;
  }
`

class CurriculumLink extends React.Component {
  render() {
    const { video, article } = this.props
    const title = video.title.split('|')[0]

    // Sometimes there's a video in the playlist but the article hasn't been
    // written yet
    const pagePath = article && article.fields && article.fields.pagePath

    return (
      <h3>
        {'👉'}
        {pagePath ? <TitleLink to={pagePath}>{title}</TitleLink> : title}
      </h3>
    )
  }
}

export default CurriculumLink
