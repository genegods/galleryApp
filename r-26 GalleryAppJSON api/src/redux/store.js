import {rootReducer} from './rootReducer'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'



let middleWare = [thunk]

let store = createStore (rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))

export {store}