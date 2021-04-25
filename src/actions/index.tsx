export const types = {
	GET_DATA: 'GET_DATA',
	GET_GENRES: 'GET_GENRES',
	GET_RELEASED_YEAR: 'GET_RELEASED_YEAR'
};

export const getData = (data: object) => {
	return {
		type: types.GET_DATA,
		data
	};
};

export const getGenres = (genre: string) => {
	return {
		type: types.GET_GENRES,
		genre
	};
};

export const getYear = (year: number) => {
	return {
		type: types.GET_RELEASED_YEAR,
		year
	};
};