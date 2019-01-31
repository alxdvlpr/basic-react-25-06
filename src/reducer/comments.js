import { CREATE_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { reduceDataStructure } from '../helpers'

const defaultComments = reduceDataStructure(normalizedComments)

export default (commentsState = defaultComments, action) => {
  const { type } = action

  switch (type) {
    case CREATE_COMMENT:
      const {
        payload: {
          comment: { user, text }
        },
        id
      } = action
      return { ...commentsState, [id]: { id, user, text } }

    default:
      return commentsState
  }
}
