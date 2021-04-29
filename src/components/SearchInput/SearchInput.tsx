import React, { useEffect } from "react";
import { connect, useDispatch, ConnectedProps } from "react-redux";
import { getData, getInput } from "../../actions/index";
import { SearchBlock, Input } from './SearchInput.styles';
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
    <SearchBlock>
      <Input placeholder="Artists or songs" type="text" onChange={(e) => passValue(e.target.value)} />
    </SearchBlock>
  );
};

const mapStateToProps = (state: any) => {
  return {
    inputValue: state.musicList.inputValue || []
  };
};

const connector = connect(mapStateToProps);
type InputProps = ConnectedProps<typeof connector>;
export default connector(SearchInput);
