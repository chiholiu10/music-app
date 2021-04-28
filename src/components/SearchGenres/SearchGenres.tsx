import React from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { getGenres } from "../../actions/index";
import Select from 'react-select'

interface Genre {
    id: number;
    name: string;
  }
  
  interface Video {
    id: number;
    artist: string;
    title: string;
    release_year: number;
    genre_id: number;
    image_url: string;
  }
  
interface IProps {
    genreList?: Genre[];
    videoList?: Video[];
    inputValue?: string;
    genres?: Array<any>;
}

export const SearchGenres: React.FC<SearchResultProps | IProps> = ({ genreList, genres }) => {
    const selectOptions = genreList.map((genre: any) => ({ value: genre.id, label: genre.name }));
    const dispatch = useDispatch();

    const getGenreId = (data: any) => {
        const newArray= data.map((element: any) => element.value);
        dispatch(getGenres(newArray));
    }
    
    return (
        <Select
            closeMenuOnSelect={true}
            isMulti
            options={selectOptions}
            onChange={getGenreId}
        />
    )
}

const mapStateToProps = (state: any) => {
    return {
        genreList: state.videoList.genreList || [],
        genres: state.videoList.selectedGenres || []
    };
}

const connector = connect(mapStateToProps);
type SearchResultProps = ConnectedProps<typeof connector>;
export default connector(SearchGenres);