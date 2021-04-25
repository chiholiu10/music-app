import React, { useEffect } from "react";
import { connect, useDispatch, ConnectedProps } from "react-redux";
import { getData, getInput } from "../../actions/index";
import axios from "axios";

export const SearchInput: React.FC<InputProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(
            "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json"
            );
            dispatch(getData(response.data));
        } catch (err) {
            console.log(err);
        }
        };
        fetchData();
    }, [dispatch]);

    const passValue = (e: string) => {
        dispatch(getInput(e));
    };

    return (
        <div>
        <input type="text" onChange={(e) => passValue(e.target.value)} />
        <div>Search Input</div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        inputValue: state.videoList.inputValue || []
    };
}

const connector = connect(mapStateToProps);
type InputProps = ConnectedProps<typeof connector>;
export default connector(SearchInput);
