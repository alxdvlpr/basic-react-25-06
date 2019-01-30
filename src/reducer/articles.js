import { CREATE_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'

export default (articlesState = normalizedArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case CREATE_COMMENT:
      const {
        comment: { articleId, id }
      } = action.payload
      const updatedArticles = [...articlesState]
      const parentArticleComments =
        articlesState.find((article) => article.id === articleId).comments || []
      const parentArticleIndex = articlesState.findIndex(
        (article) => article.id === articleId
      )

      parentArticleComments.push(id)
      updatedArticles[parentArticleIndex].comments = parentArticleComments

      return updatedArticles

    default:
      return articlesState
  }
}
