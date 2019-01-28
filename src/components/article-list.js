import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchData && this.props.fetchData()
  }

  render() {
    return <ul>{this.articles}</ul>
  }

  get selectedArticles() {
    const {
      articles,
      filters: {
        selectedArticles,
        dateRange: { from, to }
      }
    } = this.props
    const filterBySelected = (article) =>
      !selectedArticles.length ||
      selectedArticles.some(
        ({ value: selectedArticle }) => selectedArticle === article.id
      )
    const filterByDate = ({ date: articleDate }) =>
      (!from || new Date(articleDate).valueOf() > from.valueOf()) &&
      (!to || new Date(articleDate).valueOf() < to.valueOf())

    return articles.filter(filterBySelected).filter(filterByDate)
  }

  get articles() {
    const { openItemId, toggleOpenItem } = this.props

    if (!this.selectedArticles.length)
      return <h4>Opps! There are not articles matching your criteria</h4>

    return this.selectedArticles.map((article) => (
      <li key={article.id} className="test--article-list__item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }
}

export default connect((state) => ({
  articles: state.articles,
  filters: state.filters
}))(accordion(ArticleList))
