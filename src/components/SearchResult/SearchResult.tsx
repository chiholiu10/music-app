import { FC, memo } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Container, InnerContainer, Title, ReleaseYear, Column } from "./SearchResult.styles";
import { IProps } from '../../Types/Types';
import { LazyLoader } from '../LazyLoader/LazyLoader';

export const SearchResult: FC<SearchResultProps | IProps> = ({ videoList, inputValue, selectedGenres, selectedYear }) => {
  let inputVal = inputValue.toLowerCase();

  const filterRequirements = (data: { release_year: number; artist: string; title: string; genre_id: number; }) => {
    let dataArtist = data.artist.toLowerCase();
    let dataTitle = data.title.toString().toLowerCase();
    let firstCondition = selectedYear == null || selectedYear == 0 || data.release_year === selectedYear;
    let secondCondition = inputValue.trim() == '' || dataArtist.indexOf(inputVal) > -1 || dataTitle.indexOf(inputVal) > -1;
    let thirdCondition = selectedGenres.length === 0 || selectedGenres.indexOf(data.genre_id) > -1;
    let filter = firstCondition && secondCondition && thirdCondition;

    return filter;
  };

  return (
    <Container>
      {videoList.filter(filterRequirements).map((item: { title: string; release_year: number; image_url: string; }, index: number) => (
        <InnerContainer key={index}>
          <Column>
            <LazyLoader src={item.image_url} alt={item.title} />
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
export default connector(memo(SearchResult));