import { CREATE_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'
import { reduceDataStructure } from '../helpers'

const defaultArticles = reduceDataStructure(normalizedArticles)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState[payload.id].remove

    case CREATE_COMMENT:
      const {
        payload: {
          comment: { articleId }
        },
        id
      } = action
      const updatedArticles = { ...articlesState }
      const comments = updatedArticles[articleId].comments || []

      comments.push(id)
      return updatedArticles

    default:
      return articlesState
  }
}
