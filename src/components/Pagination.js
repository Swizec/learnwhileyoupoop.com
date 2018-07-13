import React from 'react'

import { Pager } from 'react-bootstrap'
import { Link } from 'gatsby'

const Pagination = ({ pathContext, small }) => {
  const { prevSlug, nextSlug, prevTitle, nextTitle } = pathContext
  return (
    <Pager>
      {!small ? <p>👓&nbsp;Keep on learnin'&nbsp;👓</p> : null}
      {prevSlug && (
        <Pager.Item
          href={'/' + prevSlug}
          componentClass={Link}
          to={'/' + prevSlug}
        >
          &larr;&nbsp;Previous lesson: {prevTitle}
        </Pager.Item>
      )}
      {nextSlug && (
        <Pager.Item
          href={'/' + nextSlug}
          componentClass={Link}
          to={'/' + nextSlug}
        >
          Next lesson:&nbsp;{nextTitle}&nbsp;&rarr;
        </Pager.Item>
      )}
    </Pager>
  )
}

export default Pagination
