import {photoReducer, PHOTO_KEY} from './photoRedux/photo.reducer'
import {combineReducers} from 'redux'

let rootReducer = combineReducers({
    [PHOTO_KEY] : photoReducer
})

export {rootReducer}