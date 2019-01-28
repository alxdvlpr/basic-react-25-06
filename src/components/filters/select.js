import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { updateFilters } from '../../action'

class SelectFilter extends Component {
  state = {
    selectedArticles: null
  }

  handleChange = (selectedArticles) => {
    this.setState({ selectedArticles })
    this.props.updateFilters({ selectedArticles })
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.state.selectedArticles}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  null,
  { updateFilters }
)(SelectFilter)
