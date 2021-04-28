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
  selectedGenres?: any;
  inputValue?: string;
  selectedYear?: number;
}

export const SearchResult: React.FC<SearchResultProps | IProps> = ({ videoList, inputValue, selectedGenres, selectedYear }) => {
  const filterRequirements = (data: { release_year: number; artist: string; title: string; genre_id: number; }) => {
    return (selectedYear == null || selectedYear == 0 || data.release_year == selectedYear)
      && (inputValue.trim() == '' || data.artist.toLowerCase().includes(inputValue.toLowerCase()) || data.title.toString().toLowerCase().includes(inputValue.toLowerCase()))
      && (selectedGenres.length == 0 || selectedGenres.includes(data.genre_id));
  };

  const filteredVideos = videoList.filter(filterRequirements);

  return (
    <div>{filteredVideos.map((item: { title: string; }, index: number) => (
      <div key={index}>{item.title}</div>
    ))}</div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    inputValue: state.videoList.inputValue || "",
    genreList: state.videoList.genreList || [],
    videoList: state.videoList.videoList || [],
    selectedGenres: state.videoList.selectedGenres || [],
    selectedYear: state.videoList.selectedYear || []
  };
};

const connector = connect(mapStateToProps);
type SearchResultProps = ConnectedProps<typeof connector>;
export default connector(SearchResult);