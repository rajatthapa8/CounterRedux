import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counterReducer from '../reducers/counterReducer'

export const store  = createStore(
    counterReducer,
    applyMiddleware(thunk)
    )
