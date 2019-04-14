export default function reducer(state=[],action){
  switch(action.type) {
    case "ADD_ARTICLES": 
      return action.payload
    default:
      return state;
  }
}
