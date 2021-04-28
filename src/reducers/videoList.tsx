import { types } from "../actions";

const initialState = {
	genreList: [],
    videoList: [],
	selectedGenres: [],
	selectedYear: [],
	inputValue: ""
};

export const videoList = (state = initialState, action: any) => {
	switch(action.type) {
		case types.GET_DATA: {
			return {
				...state,
				genreList: action.data.genres,
				videoList: action.data.videos
			};
		}

		case types.GET_INPUT_VALUE: {
			return {
				...state,
				inputValue: action.value
			}
		}

		case types.GET_GENRES: {
			return {
				...state,
				selectedGenres: action.genre,
			}
		}

		case types.GET_YEAR: {
			return {
				...state,
				selectedYear: action.year
			}
		}

		default: 
			return state;
		}
};

export default videoList;