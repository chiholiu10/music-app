import React from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { getYear } from "../../actions/index";
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

export const SearchYear: React.FC<SearchYearProps | IProps> = ({ videoList }) => {
    const dispatch = useDispatch();
    let getAllYears = videoList.map((video: any) => ({ value: video.id, label:  video.release_year }));
    let labels = getAllYears.map((video: { label: any; }) => video.label);
    let removeDuplicates = getAllYears.filter(({label}: any, index: number) => !labels.includes(label, index + 1))
    let ascendingYears = removeDuplicates.sort((a: { label: number; }, b: { label: number; }) => b.label - a.label);

    const releaseYear = (year: any) => {
        dispatch(getYear(year.label));
    }
    return (
        <Select
            options={ascendingYears}
            onChange={releaseYear}
        />
    )
}

const mapStateToProps = (state: any) => {
    return {
        videoList: state.videoList.videoList || [],
    };
}

const connector = connect(mapStateToProps);
type SearchYearProps = ConnectedProps<typeof connector>;
export default connector(SearchYear);
