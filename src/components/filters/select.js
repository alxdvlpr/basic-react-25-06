import React, { Component } from 'react'
import Select from 'react-select'
import { articles } from './../../commonPropTypes'

class SelectFilter extends Component {
  state = {
    selected: null
  }

  handleChange = (selected) => this.setState({ selected })

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
        value={this.state.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

SelectFilter.propTypes = { ...articles }

export default SelectFilter
