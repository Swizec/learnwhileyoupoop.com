import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ClickableH3 = styled.h3`
  cursor: pointer;
`

const Description = styled.div`
  width: 720px;
`

const CenteredDesc = Description.extend`
  text-align: center;

  @media (max-width: 720px) {
    width: 95%;
  }
`

class CurriculumLink extends React.Component {
  render() {
    const { video, article } = this.props

    return (
      <div>
        <ClickableH3 onClick={this.onClick}>
          {'👉'}{' '}
          <Link to={article.fields.slug}>{video.title.split('|')[0]}</Link>
        </ClickableH3>
      </div>
    )
  }
}

export default CurriculumLink
