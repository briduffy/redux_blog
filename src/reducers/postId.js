const postId = ( state = 1, action ) => {
  switch(action.type) {
    case 'POST_ID':
      return state + 1
    default:
      return state
  }
}

export default postId