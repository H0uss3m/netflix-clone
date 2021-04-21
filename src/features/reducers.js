import { combineReducers } from 'redux'
import favoriteReducer from './favoriteSlice'
import userReducer from './userSlice'

export default combineReducers({
  user: userReducer,
  favorite: favoriteReducer,
})
