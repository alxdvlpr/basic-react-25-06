import { CREATE_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type } = action

  switch (type) {
    case CREATE_COMMENT:
      const {
        payload: { comment }
      } = action
      return { ...commentsState, [comment.id]: comment }

    default:
      return commentsState
  }
}
