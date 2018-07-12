import React from 'react'
import AnimakitExpander from 'animakit-expander'
import styled from 'styled-components'
import ResponsivePlayer from './ResponsivePlayer'

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

class CurriculumEntry extends React.Component {
  state = {
    expanded: false,
  }

  onClick = () =>
    this.setState({
      expanded: !this.state.expanded,
    })

  render() {
    const { video, article } = this.props,
      { expanded } = this.state

    return (
      <div>
        <ClickableH3 onClick={this.onClick}>
          {expanded ? '👇' : '👉'} {video.title.split('|')[0]}
        </ClickableH3>
        {typeof window === 'undefined' ? null : (
          <AnimakitExpander expanded={expanded}>
            <ResponsivePlayer videoId={video.videoId} />

            <Description>
              {article ? (
                <React.Fragment>
                  <p className="lead">{article.frontmatter.abstract}</p>
                  <div dangerouslySetInnerHTML={{ __html: article.html }} />
                </React.Fragment>
              ) : (
                <p>
                  <em>
                    This is where the companion article with additional
                    exercises shows up. Each around 1,000 words going in-depth
                    into the topic from the video.
                  </em>
                </p>
              )}
            </Description>
            <CenteredDesc>
              <a href="https://gum.co/UVcfs" className="gumroad-button">
                Pre-order Module 1 for $29
              </a>
              <br />
              <small>Companion articles/exercises coming May 2018</small>
              <br />
              <br />or <br />
              <a href="https://gum.co/mDSp" className="gumroad-button">
                Get everything for $19/month
              </a>
              <br />
              <small>New content daily</small>
            </CenteredDesc>
          </AnimakitExpander>
        )}
      </div>
    )
  }
}

export default CurriculumEntry
