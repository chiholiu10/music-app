import React from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { getGenres } from "../../actions/index";
import { IProps } from '../../Interfaces/Interfaces';
import Select from 'react-select';

export const SearchGenres: React.FC<SearchResultProps | IProps> = ({ genreList }) => {
  const selectOptions = genreList.map((genre: { id: number; name: string; }) => ({ value: genre.id, label: genre.name }));
  const dispatch = useDispatch();

  const getGenreId = (data: any) => {
    const newArray = data.map(((element: { value: number; }) => element.value));
    dispatch(getGenres(newArray));
  };

  return (
    <Select
      closeMenuOnSelect={true}
      isMulti
      options={selectOptions}
      onChange={getGenreId}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    genreList: state.musicList.genreList || []
  };
};

const connector = connect(mapStateToProps);
type SearchResultProps = ConnectedProps<typeof connector>;
export default connector(SearchGenres);