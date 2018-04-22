import React from 'react'
import { Row, Col as Column, Image } from 'react-bootstrap'
// import InstagramEmbed from "react-instagram-embed";
// import Countdown from "react-countdown-now";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from 'react-share'

import Section, { GreenSection, LowSection } from './components/Section'
import { MiddleColumn } from './components/Columns'
import Testimonial from './components/Testimonials'

import Signature from './img/signature.gif'

export const Header = () => (
  <header className="text-left container">
    <Row>
      <Column md={10} mdOffset={2}>
        <h1>Swiz is turning 30 so everything is $30</h1>
        <p className="lead">
          Get everything Swiz has ever made. Learn React, Redux, MobX, D3v4,
          ES6+ and more
        </p>
      </Column>
    </Row>
  </header>
)

export const Footer = () => (
  <LowSection>
    <MiddleColumn>
      <p>Know someone who needs help? Share 👇</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TwitterShareButton
          via="swizec"
          title="Sweet! @swizec is giving away everything he knows about React, ES6+, D3 and others for just $30"
          url="https://swizec.com/30"
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton
          title="Sweet! @swizec is giving away everything he knows about React, ES6+, D3 and others for just $30"
          url="https://swizec.com/30"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </div>
      <p>
        Cheers,<br />
        ~Swizec<br />
        <img src={Signature} style={{ width: '200px', margin: '1.5em 0' }} />
      </p>
    </MiddleColumn>
  </LowSection>
)
