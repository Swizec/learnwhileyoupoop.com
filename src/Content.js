import React from 'react'
import { Tweet } from 'react-twitter-widgets'
import { Row, Col as Column, Image } from 'react-bootstrap'
// import InstagramEmbed from "react-instagram-embed";
// import Countdown from "react-countdown-now";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from 'react-share'

import Section, {
  GreenSection,
  FluffySection,
  LowSection,
  SectionTitle,
} from './components/Section'
import { MiddleColumn } from './components/Columns'
import Testimonial from './components/Testimonials'

import Signature from './img/signature.gif'

export const Header = () => (
  <header className="text-left container">
    <Row>
      <Column md={11} mdOffset={1}>
        <h1>Learn React While You Poop</h1>
        <p className="lead">
          No pressure learning at 2 minutes per day. Start with the basics,
          become a React 16.3 master in 30 days
        </p>
      </Column>
    </Row>
  </header>
)

export const Intro = () => (
  <FluffySection>
    <MiddleColumn>
      <Tweet tweetId="981932124231024640" />
      Write copy describing how this works and what's up.
    </MiddleColumn>
  </FluffySection>
)

export const Curriculum = () => (
  <LowSection>
    <SectionTitle>Curriculum Roadmap</SectionTitle>
    List current and future videos. Each is a link that expands with video.
    Additional links for transcript and exercises show up. Find way to not have
    to manually republish all the time.
  </LowSection>
)

export const Footer = () => (
  <LowSection>
    <MiddleColumn>
      <p>
        Know someone who wants to learn React and the associated ecosystem?
        Share 👇
      </p>
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
