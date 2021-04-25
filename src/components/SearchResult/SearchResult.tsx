import React from "react";
import { connect, ConnectedProps } from "react-redux";

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
}

export const SearchResult: React.FC<SearchResultProps | IProps> = ({ genreList, videoList, inputValue}) => {
    console.log(videoList)
    
    // let test = videoList.filter((video: any) => video.artist.includes(inputValue));
    // console.log(test)
    return (
        <div>SearchResult</div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        inputValue: state.videoList.inputValue || [],
        genreList: state.videoList.genreList || [],
        videoList: state.videoList.videoList || []
    };
}

const connector = connect(mapStateToProps);
type SearchResultProps = ConnectedProps<typeof connector>;
export default connector(SearchResult);