import React from 'react'
import AnimakitExpander from 'animakit-expander'
import styled from 'styled-components'
import YouTube from 'react-youtube'

const ClickableH3 = styled.h3`
  cursor: pointer;
`

const Description = styled.p`
  width: 440px;
`

class CurriculumEntry extends React.Component {
  state = {
    expanded: false,
  }

  onClick = () =>
    this.setState({
      expanded: !this.state.expanded,
    })

  render() {
    const { video } = this.props,
      { expanded } = this.state

    return (
      <div>
        <ClickableH3 onClick={this.onClick}>
          {expanded ? '👇' : '👉'} {video.title.split('|')[0]}
        </ClickableH3>
        <AnimakitExpander expanded={expanded}>
          <YouTube videoId={video.videoId} opts={{ width: 640, hieght: 390 }} />
          <Description>{video.description}</Description>
        </AnimakitExpander>
      </div>
    )
  }
}

export default CurriculumEntry
