// This is where we connect all of our reducers and our middleware

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
} from '../src/reducers/productReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
})
const initialState = {}

const middleware = [thunk]

// Pass in our reducer followed by initialstate followed by middleware
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
