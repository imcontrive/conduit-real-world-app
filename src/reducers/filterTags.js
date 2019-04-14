export default function filterTags(state=[],action){
  switch(action.type) {
    case "FILTER_BY_TAGS": 
      return action.payload
    default:
      return state;
  }
}