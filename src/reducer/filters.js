import { UPDATE_FILTERS } from '../constants'

const defaultState = {
  selectedArticles: [],
  dateRange: []
}

export default (filters = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_FILTERS:
      const { dateRange, selectedArticles } = payload
      return {
        selectedArticles: selectedArticles || filters.selectedArticles,
        dateRange: dateRange || filters.dateRange
      }

    default:
      return filters
  }
}
