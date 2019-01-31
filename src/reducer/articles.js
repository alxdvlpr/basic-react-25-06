import { CREATE_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'
import { reduceDataStructure } from '../helpers'

const defaultArticles = reduceDataStructure(normalizedArticles)

export default (articles = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      const updatedArticles = { ...articles }
      delete updatedArticles[payload.id]
      return updatedArticles

    case CREATE_COMMENT:
      const {
        payload: {
          comment: { articleId }
        },
        id
      } = action
      return {
        ...articles,
        [articleId]: {
          ...articles[articleId],
          comments: [...(articles[articleId].comments || []), id]
        }
      }

    default:
      return articles
  }
}
