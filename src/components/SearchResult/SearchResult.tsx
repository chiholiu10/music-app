import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { IProps } from '../../Interfaces/Interfaces';

export const SearchResult: React.FC<SearchResultProps | IProps> = ({ videoList, inputValue, selectedGenres, selectedYear }) => {
  const filterRequirements = (data: { release_year: number; artist: string; title: string; genre_id: number; }) => {
    return (selectedYear == null || selectedYear == 0 || data.release_year == selectedYear)
      && (inputValue.trim() == '' || data.artist.toLowerCase().includes(inputValue.toLowerCase()) || data.title.toString().toLowerCase().includes(inputValue.toLowerCase()))
      && (selectedGenres.length == 0 || selectedGenres.includes(data.genre_id));
  };

  const filteredVideos = videoList.filter(filterRequirements);

  return (
    <div>{filteredVideos.map((item: { title: string; release_year: number; image_url: string; }, index: number) => (
      <div key={index}>
        <p>{item.title}</p>
        <p>{item.release_year}</p>
        <img src={item.image_url} alt={item.title} />
      </div>
    ))}</div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    inputValue: state.musicList.inputValue || "",
    genreList: state.musicList.genreList || [],
    videoList: state.musicList.videoList || [],
    selectedGenres: state.musicList.selectedGenres || [],
    selectedYear: state.musicList.selectedYear || []
  };
};

const connector = connect(mapStateToProps);
type SearchResultProps = ConnectedProps<typeof connector>;
export default connector(SearchResult);