import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import { articles } from './../../commonPropTypes'

class Filters extends Component {
  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange />
      </div>
    )
  }
}

Filters.propTypes = { ...articles }

export default Filters
