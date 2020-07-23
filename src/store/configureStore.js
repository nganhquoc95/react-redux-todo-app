import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import reducers from '../reducers'

const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger))

export default store
