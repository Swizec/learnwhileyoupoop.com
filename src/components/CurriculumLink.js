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

    return (
      <h3>
        {'👉'}{' '}
        <TitleLink to={article.fields.slug}>
          {video.title.split('|')[0]}
        </TitleLink>
      </h3>
    )
  }
}

export default CurriculumLink
