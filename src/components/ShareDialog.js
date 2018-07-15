import React from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'

import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from 'react-share'

import { FluffySection } from '../components/Section'
import { FormControl } from 'react-bootstrap'
import { MiddleColumn } from '../components/Columns'

import Signature from '../img/signature.gif'

const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class ShareDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sharePlaceholder: props.sharePlaceholder,
    }
  }

  handleChange = event => {
    this.setState({ sharePlaceholder: event.target.value })
  }

  render() {
    return (
      <FluffySection>
        <MiddleColumn>
          <p style={{ textAlign: 'center' }}>
            Know someone who wants to learn React and its whole ecosystem? Share
            👇
          </p>
          <CenteredDiv>
            <FormControl
              componentClass={Textarea}
              style={{
                textAlign: 'center',
                width: '500px',
              }}
              value={this.state.sharePlaceholder}
              onChange={this.handleChange}
            />
          </CenteredDiv>
          <br />
          <CenteredDiv>
            <TwitterShareButton
              via="swizec"
              title={this.state.sharePlaceholder}
              url={this.props.url}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <FacebookShareButton url={this.props.url}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </CenteredDiv>
          <p>
            Cheers,<br />
            ~Swizec<br />
            <img
              src={Signature}
              style={{ width: '200px', margin: '1.5em 0' }}
            />
          </p>
        </MiddleColumn>
      </FluffySection>
    )
  }
}
