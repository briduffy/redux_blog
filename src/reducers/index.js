import { combineReducers } from  'redux'
import posts from './posts'
import postId from './postId'

const rootReducer = combineReducers({
  posts,
  postId,
})

export default rootReducer