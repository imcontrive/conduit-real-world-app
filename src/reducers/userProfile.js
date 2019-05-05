export default function userProfile(state = [], action) {
	// console.log(action, state);
	switch (action.type) {
		case "USER_PROFILE":
			return action.payload;
		case "USER_ARTICLES":
			return action.payload;
		default:
			return state;
	}
}