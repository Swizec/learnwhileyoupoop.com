import React from 'react'
import { Tweet } from 'react-twitter-widgets'
import { Row, Col as Column } from 'react-bootstrap'
import styled from 'styled-components'
// import InstagramEmbed from "react-instagram-embed";
// import Countdown from "react-countdown-now";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from 'react-share'

import { FluffySection, LowSection, SectionTitle } from './components/Section'
import { MiddleColumn, FullColumn } from './components/Columns'
// import Testimonial from './components/Testimonials'
import CurriculumEntry from './components/CurriculumEntry'
import CurriculumLink from './components/CurriculumLink'

import Signature from './img/signature.gif'
import seriouslyGif from './img/seriously.gif'

export const Header = () => (
  <header className="text-left container">
    <Row>
      <Column md={11} mdOffset={1}>
        <h1>
          Imagine what you could build 🏗<br />if you had time to learn all of
          React 👩‍🎓
        </h1>
        <p className="lead">
          <strong style={{ fontStyle: 'normal' }}>
            Learn While You Poop! 💩
          </strong>
          <br />👉 No pressure learning at 2 minutes per day.<br />Start with
          the basics, become a React 16.3 master
        </p>
      </Column>
    </Row>
  </header>
)

const NoBullet = styled.li`
  list-style-type: none;
`

export const Intro = () => (
  <FluffySection>
    <Row>
      <MiddleColumn>
        <Tweet tweetId="981932124231024640" />
      </MiddleColumn>
    </Row>
    <Row>
      <FullColumn mdOffset={2} md={7}>
        <br />
        <p className="lead">
          How frustrated do you get when you're{' '}
          <strong>learning some tech</strong> and every resource you find is
          just <strong>wasting your time</strong>?
        </p>
        <p>
          Either you're reading <strong>random blogs</strong> that make no
          sense. Or you're paying through the nose for{' '}
          <strong>expensive books and courses</strong> that you'll{' '}
          <strong>never finish</strong> anyway.
        </p>
        <h3>Here's how it usually goes 👇</h3>
        <ul>
          <NoBullet>🎲 you give up piecing together random blogs</NoBullet>
          <NoBullet>📔 you buy a book</NoBullet>
          <NoBullet>💸 get the video course upgrade too</NoBullet>
          <NoBullet>🆕 you start reading</NoBullet>
          <NoBullet>🎓 learn some basics</NoBullet>
          <NoBullet>⚒ you build some stuff</NoBullet>
          <NoBullet>💼 you get busy</NoBullet>
          <NoBullet>🏙 life gets in your way</NoBullet>
          <NoBullet>📽 and you forget all about your course</NoBullet>
          <NoBullet>✈ 6 weeks fly by</NoBullet>
          <NoBullet>👊 you get stuck</NoBullet>
          <NoBullet>🎲 you search random blogs for a solution</NoBullet>
        </ul>
      </FullColumn>
    </Row>
    <Row>
      <MiddleColumn>
        <p>
          <img src={seriouslyGif} />
        </p>
      </MiddleColumn>
    </Row>
    <Row>
      <FullColumn mdOffset={2} md={8}>
        <h2>What if life never got in the way?</h2>
        <p className="lead">
          I can't promise life won't happen. Or that you won't get distracted
          and your boss won't give you a different project. <br />
        </p>
        <p className="lead">
          <strong>I can give you a plan</strong>.
        </p>
        <p>
          Every day you'll watch a <strong>2 minute video</strong>. If it's a
          new concept, or it makes you curious, you'll dig into an in-depth
          article about the same concept.
        </p>
        <p>
          When you understand the details, if you still have time, you'll do
          some exercises. Self-contained, in a safe environment, there to help
          you learn. Shouldn't take more than{' '}
          <strong>10 to 15 minutes of your day</strong>.
        </p>
        <h3>Plenty of time left to do what you wanna do</h3>
        <p>
          I'll remind you when there's a new video available. No need to worry
          :)
        </p>
        <p>&nbsp;</p>
        <p style={{ textAlign: 'center' }}>
          <a href="https://gum.co/mDSp" className="gumroad-button">
            Learn every day for $19/month
          </a>
          <br />
          <small>New content daily</small>
        </p>
        <p>You can check out videos from Module 1 to get a taste 👇</p>
      </FullColumn>
    </Row>
  </FluffySection>
)

export const Curriculum = ({ videos, articles, small }) => (
  <LowSection>
    {!small ? (
      <Row>
        <FullColumn mdOffset={1} md={8}>
          <p className="lead">
            Start with <i>why</i> you should learn React 🧐 then go from
            building your first React component all the way to the advanced
            stuff.
          </p>
          <p className="lead">
            Render props, context, HOC, routing, the whole shebang. If that's
            confusing, worry not, you'll learn all about it 😊
          </p>
          <p>
            Want just the advanced stuff? Start there! This is <i>your</i>{' '}
            course. You do you. 🚀
          </p>
          <p style={{ textAlign: 'center' }}>
            <a href="https://gum.co/UVcfs" className="gumroad-button">
              Pre-order Module 1 for $29
            </a>
            <br />
            <small>Companion articles/exercises coming May 2018</small>
          </p>
          <p>
            <small>PS: Click on a title to open that video 🎥</small>
          </p>
        </FullColumn>
      </Row>
    ) : null}
    <Row>
      <FullColumn mdOffset={2}>
        {videos.map(video => (
          <CurriculumLink
            video={video}
            article={articles.get(video.videoId)}
            key={video.id}
          />
        ))}
      </FullColumn>
    </Row>
    {!small ? (
      <>
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
      </>
    ) : null}
  </LowSection>
)

export const Footer = () => (
  <FluffySection>
    <MiddleColumn>
      <p>
        Know someone who wants to learn React and its whole ecosystem? Share 👇
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
