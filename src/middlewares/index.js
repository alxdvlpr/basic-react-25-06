import { generateId } from '../helpers'

export default (store) => (next) => (action) => {
  if (!action.generateId) return next(action)

  return next({ ...action, id: generateId() })
}
