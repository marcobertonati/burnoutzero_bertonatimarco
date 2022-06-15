const initialState = [];

export default (state = initialState, action) => {
	if (action.type === 'GET_MOVIES') {
		return {
			...state,
			movies: action.payload,
		};
	}
	return state;
};
