const posts = ( state = [], action) => {
  switch(action.type) {
    case 'ADD_POST':
      return [action.post, ...state]
    default:
      return state
  }
}

export default posts