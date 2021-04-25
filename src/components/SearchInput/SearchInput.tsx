import React, {  useEffect } from 'react';
import { connect, useDispatch, ConnectedProps } from "react-redux";
import { getData, getInput } from "../../actions/index";
import axios from 'axios';

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
    genres?: Genre[];
    videos?: Video[];
    input_value?: string;
  }

export const SearchInput: React.FC<InputProps | IProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json');
                dispatch(getData(response.data));
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [dispatch]);

    const passValue = (e: string) => {
        dispatch(getInput(e));
    }

    return (
        <div>
            <input type="text" onChange={(e) => passValue(e.target.value)}/>
            <div>Search Input</div>
        </div>
    )
}


function mapStateToProps(state: any){
    return {
        genres: state.genreList,
    }
}


const connector = connect(mapStateToProps);
type InputProps = ConnectedProps<typeof connector>;
export default connect(SearchInput);