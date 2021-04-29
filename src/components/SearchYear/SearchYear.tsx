import React from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { getYear } from "../../actions/index";
import Select from 'react-select';
import { SelectContainer } from "../../styles/General";
import { IProps } from '../../Interfaces/Interfaces';

export const SearchYear: React.FC<SearchYearProps | IProps> = ({ videoList }) => {
  const dispatch = useDispatch();
  const getAllYears = videoList.map((video: any) => ({ value: video.id, label: video.release_year }));
  let labels = getAllYears.map((video: { label: string; }) => video.label);
  let removeDuplicates = getAllYears.filter(({ label }: any, index: number) => !labels.includes(label, index + 1));
  let ascendingYears = removeDuplicates.sort((a: { label: number; }, b: { label: number; }) => b.label - a.label);

  const releaseYear = (year: any) => {
    dispatch(getYear(year.label));
  };
  return (
    <SelectContainer>
      <Select
        options={ascendingYears}
        onChange={releaseYear}
      />
    </SelectContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    videoList: state.musicList.videoList || [],
  };
};

const connector = connect(mapStateToProps);
type SearchYearProps = ConnectedProps<typeof connector>;
export default connector(SearchYear);
