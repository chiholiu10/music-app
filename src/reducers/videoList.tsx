import { types } from "../actions/index";

const initialState = {
	genreList: [],
	yearList: []
};

export const videoList = (state = initialState, action: any) => {
	switch(action.type) {
	case types.GET_DATA: {
		return {
			...state,
            genreList: [], 
            yearList: [],
			catalogInfo: action.data
		};
	}

	case types.GET_GENRES: {
		return {
			...state,
		};
	}

	case types.GET_RELEASED_YEAR: {
		return {
			...state,
			currentIndex: action.index
		};
	}

	default: 
		return state;
	}
};

export default videoList;