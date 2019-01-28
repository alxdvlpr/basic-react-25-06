import React, { Component } from 'react'
import { connect } from 'react-redux'
import DateRange from './date-range'
import SelectFilter from './select'

export class Filters extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange />
      </div>
    )
  }
}

export default connect((state) => ({
  articles: state.articles
}))(Filters)
