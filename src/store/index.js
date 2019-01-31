import { createStore, applyMiddleware, compose } from 'redux'
import customMiddleware from '../middlewares/index'
import reducer from '../reducer'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(customMiddleware)
  // other store enhancers if any
)

const store = createStore(reducer, enhancer)

//DEV Only, no need in prod
window.store = store

export default store
