import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createComment } from '../ac/index'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      text: ''
    }
    this.userElement = React.createRef()
    this.createComment = this.createComment.bind(this)
  }

  componentDidMount() {
    this.userElement.current.focus()
  }

  get isFormValid() {
    const { user, text } = this.state
    return isFieldValid('user', user) && isFieldValid('text', text)
  }

  createComment() {
    if (!this.isFormValid) return false

    this.props.createComment({
      user: this.state.user,
      text: this.state.text,
      articleId: this.props.articleId
    })

    this.setState({ user: '', text: '' })
  }

  handleChange = (name) => ({ target: { value } }) => {
    this.setState({ [name]: value })
  }

  render() {
    return (
      <fieldset>
        <legend>Comment the article</legend>
        <legend htmlFor="name">User Name:</legend>
        <input
          id="name"
          ref={this.userElement}
          value={this.state.user}
          onChange={this.handleChange('user')}
        />
        <legend htmlFor="text">Text:</legend>
        <textarea
          id="text"
          value={this.state.text}
          onChange={this.handleChange('text')}
        />
        <br />
        <input
          type="button"
          value="Comment"
          onClick={this.createComment}
          disabled={!this.isFormValid}
        />
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

const isFieldValid = (fieldName, fieldValue) => {
  return (
    fieldValue.length >= validationRules[fieldName].min &&
    fieldValue.length <= validationRules[fieldName].max
  )
}

Comment.propTypes = {
  parentId: PropTypes.string,
  // from connect
  handleSubmit: PropTypes.func.isRequired
}

export default connect(
  null,
  { createComment }
)(CommentForm)
