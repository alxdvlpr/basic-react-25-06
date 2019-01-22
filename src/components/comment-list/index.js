import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import { comments } from './../../commonPropTypes'
import './style.css'

export class CommentList extends Component {
  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div className="comment-list-container">
        <button className="comment-list-button" onClick={toggleOpen}>
          {text}
        </button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  get body() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul className="comments-container">
        {comments.map((comment) => (
          <li className="comment-item" key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="comment-notification">No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

CommentList.propTypes = {
  ...comments,
  //from toggleOpen decorator
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

export default toggleOpen(CommentList)
