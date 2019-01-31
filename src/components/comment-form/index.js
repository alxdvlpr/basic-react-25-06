import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createComment } from '../../ac/index'
import { changeDateRange } from '../../ac/index'

class CommentForm extends Component {
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

  get isFormValid() {
    const name = this.nameElement.current.value
    const text = this.textElement.current.value

    return isFieldValid(name, 'name') && isFieldValid(text, 'text')
  }

  createComment() {
    if (!this.isFormValid) return false
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

const validationRules = {
  user: {
    min: 3,
    max: 20
  },
  text: {
    min: 10,
    max: 100
  }
}

const isFieldValid = (fieldName, fieldValue) =>
  fieldValue.length >= validationRules[fieldName].min &&
  fieldValue.length <= validationRules[fieldName].max

Comment.propTypes = {
  parentId: PropTypes.string,
  // from connect
  handleSubmit: PropTypes.func.isRequired
}

export default connect(
  null,
  { createComment }
)(CommentForm)
