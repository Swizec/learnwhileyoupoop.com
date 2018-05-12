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
import { MiddleColumn, FullColumn } from './components/Columns'
import Testimonial from './components/Testimonials'
import CurriculumEntry from './components/CurriculumEntry'

import Signature from './img/signature.gif'

export const Header = () => (
  <header className="text-left container">
    <Row>
      <Column md={11} mdOffset={1}>
        <h1>Do you buy more books than you read?</h1>
        <p className="lead">
          <strong style={{ fontStyle: 'normal' }}>
            Learn While You Poop! 💩
          </strong>
          <br />👉 No pressure learning at 2 minutes per day. Start with the
          basics, become a React 16.3 master in 30 days or sooner
        </p>
        <p>[testimonial]</p>
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

export const Curriculum = ({ videos }) => (
  <LowSection>
    <SectionTitle>Module 1: React Essentials</SectionTitle>
    <Row>
      <FullColumn mdOffset={2}>
        {videos.map(video => <CurriculumEntry video={video} key={video.id} />)}
      </FullColumn>
    </Row>
    <SectionTitle>Upcoming Modules</SectionTitle>
    <Row>
      <FullColumn mdOffset={2}>
        {[
          'Manage state with Redux or MobX',
          'React Testing and Debugging',
          'GraphQL',
          'Build a fullstack app',
          'Think in algorithms',
          'How to architect',
          'React Native',
          'Suggest a topic ...',
        ].map(name => <h3>{name}</h3>)}
      </FullColumn>
    </Row>
  </LowSection>
)

export const Footer = () => (
  <FluffySection>
    <MiddleColumn>
      <p>Know someone who wants to learn React and its ecosystem? Share 👇</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TwitterShareButton
          via="swizec"
          title="Do you buy more books than you read? Learn while you poop! Learn React and its ecosystem in 2 minutes per day /@swizec"
          url="https://learnwhileyoupoop.com"
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton
          title="Do you buy more books than you read? Learn while you poop! Learn React and its ecosystem in 2 minutes per day /@swizec"
          url="https://learnwhileyoupoop.com"
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
  </FluffySection>
)
