export const types = {
  GET_DATA: "GET_DATA",
  GET_GENRES: "GET_GENRES'",
  GET_INPUT_VALUE: "GET_INPUT_VALUE",
  GET_YEAR: "GET_YEAR"
};

export const getData = (data: any) => {
  return {
    type: types.GET_DATA,
    data
  };
};

export const getInput = (value: string) => {
  return {
    type: types.GET_INPUT_VALUE,
    value
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
    type: types.GET_YEAR,
    year
  };
};