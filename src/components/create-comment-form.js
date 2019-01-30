import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createComment } from './../ac'
import { changeDateRange } from '../ac'

class CreateCommentForm extends Component {
  constructor(props) {
    super(props)
    this.nameElement = React.createRef()
    this.textElement = React.createRef()
    this.createComment = this.createComment.bind(this)
  }

  componentDidMount() {
    this.nameElement.current.focus()
    this.textElement.current.focus()
  }

  createComment() {
    this.props.createComment({
      user: this.nameElement.current.value,
      text: this.textElement.current.value,
      articleId: this.props.articleId
    })
  }

  render() {
    return (
      <fieldset>
        <legend>Comment the article</legend>
        <legend htmlFor="name">User Name:</legend>
        <input id="name" ref={this.nameElement} />
        <legend htmlFor="text">Text:</legend>
        <textarea id="text" ref={this.textElement} />
        <br />
        <input type="button" value="Comment" onClick={this.createComment} />
      </fieldset>
    )
  }
}

Comment.propTypes = {
  parentId: PropTypes.string,
  // from connect
  handleSubmit: PropTypes.func.isRequired
}

export default connect(
  null,
  { createComment }
)(CreateCommentForm)
