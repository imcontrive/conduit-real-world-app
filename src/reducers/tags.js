export default function tags(state=[],action){
  switch(action.type) {
    case "ADD_TAGS": 
      return action.payload
    default:
      return state;
  }
}