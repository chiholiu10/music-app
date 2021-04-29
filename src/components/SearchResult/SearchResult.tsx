import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Container, InnerContainer, Title, ReleaseYear, Image, Column } from "./SearchResult.styles";
import { IProps } from '../../Interfaces/Interfaces';

export const SearchResult: React.FC<SearchResultProps | IProps> = ({ videoList, inputValue, selectedGenres, selectedYear }) => {
  const filterRequirements = (data: { release_year: number; artist: string; title: string; genre_id: number; }) => {
    return (selectedYear == null || selectedYear == 0 || data.release_year == selectedYear)
      && (inputValue.trim() == '' || data.artist.toLowerCase().includes(inputValue.toLowerCase()) || data.title.toString().toLowerCase().includes(inputValue.toLowerCase()))
      && (selectedGenres.length == 0 || selectedGenres.includes(data.genre_id));
  };

  const filteredVideos = videoList.filter(filterRequirements);

  return (
    <Container>
      {filteredVideos.map((item: { title: string; release_year: number; image_url: string; }, index: number) => (
        <InnerContainer key={index}>
          <Column>
            <Image src={item.image_url} alt={item.title} />
          </Column>
          <Column>
            <Title>{item.title}</Title>
            <ReleaseYear>{item.release_year}</ReleaseYear>
          </Column>
        </InnerContainer>
      ))}
    </Container>
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