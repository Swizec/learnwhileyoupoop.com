import React from 'react'

import { Pager } from 'react-bootstrap'
import { Link } from 'gatsby'

const Pagination = ({ pathContext, small }) => {
  const { prevPagePath, nextPagePath, prevTitle, nextTitle } = pathContext
  return (
    <Pager>
      {!small ? <p>👓&nbsp;Keep on learnin'&nbsp;👓</p> : null}
      {prevPagePath && (
        <Pager.Item href={prevPagePath} componentClass={Link} to={prevPagePath}>
          &larr;&nbsp;Previous lesson: {prevTitle}
        </Pager.Item>
      )}
      {nextPagePath && (
        <Pager.Item href={nextPagePath} componentClass={Link} to={nextPagePath}>
          Next lesson:&nbsp;{nextTitle}&nbsp;&rarr;
        </Pager.Item>
      )}
    </Pager>
  )
}

export default Pagination
