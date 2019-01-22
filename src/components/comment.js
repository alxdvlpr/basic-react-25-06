import React from 'react'
import { comments } from './../commonPropTypes'

function Comment({ comment }) {
  return (
    <div>
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.propTypes = { ...comments }

export default Comment
