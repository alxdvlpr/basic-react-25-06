import { CREATE_COMMENT } from '../constants'
import { generateId } from '../helpers'

export default (store) => (next) => (action) => {
  const { type } = action

  switch (type) {
    case CREATE_COMMENT:
      const { comment } = action.payload
      const id = generateId()
      next({
        ...action,
        payload: {
          comment: { id, ...comment }
        }
      })
      return true

    default:
      next(action)
      return true
  }
}
