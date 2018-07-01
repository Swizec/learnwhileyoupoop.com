import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  max-width: 1280px;
`

const playerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
}

const ResponsivePlayer = ({ videoId }) => (
  <Wrapper>
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoId}`}
      width="100%"
      height="100%"
      style={playerStyle}
    />
  </Wrapper>
)

export default ResponsivePlayer
