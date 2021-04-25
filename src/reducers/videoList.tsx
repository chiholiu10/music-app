import { types } from "../actions";

const initialState = {
	genreList: [],
    videoList: [],
	inputValue: ""
};

export const videoList = (state = initialState, action: any) => {
	switch(action.type) {
	case types.GET_DATA: {
		return {
			...state,
            genreList: [...state.genreList, action.data.genres],
			videoList: [...state.videoList, action.data.videos]
		};
	}

	case types.GET_INPUT_VALUE: {
		return {
			...state,
			inputValue: action.value
		}
	}

	default: 
		return state;
	}
};

export default videoList;