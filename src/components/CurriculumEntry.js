import React from 'react'
import AnimakitExpander from 'animakit-expander'
import styled from 'styled-components'
import YouTube from 'react-youtube'

const ClickableH3 = styled.h3`
  cursor: pointer;
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
          {video.title.split('|')[0]}
        </ClickableH3>
        <AnimakitExpander expanded={expanded}>
          <YouTube videoId={video.videoId} />
          <p>{video.description}</p>
        </AnimakitExpander>
      </div>
    )
  }
}

export default CurriculumEntry
