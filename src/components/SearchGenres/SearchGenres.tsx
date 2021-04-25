import React from "react";
import { connect, ConnectedProps } from "react-redux";

export interface Genre {
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
}

export const SearchGenres: React.FC<SearchResultProps | IProps> = ({ genreList }) => {
    return (
        <div>SearchGenres</div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        genreList: state.videoList.genreList || [],
    };
}

const connector = connect(mapStateToProps);
type SearchResultProps = ConnectedProps<typeof connector>;
export default connector(SearchGenres);