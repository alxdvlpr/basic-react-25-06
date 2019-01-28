import { INCREMENT, DELETE_ARTICLE, UPDATE_FILTERS } from '../constants'

export function increment() {
  return { type: INCREMENT }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function updateFilters(payload) {
  return {
    type: UPDATE_FILTERS,
    payload
  }
}
