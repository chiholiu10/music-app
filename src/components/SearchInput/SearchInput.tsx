import React, { memo } from "react";
import { connect, useDispatch, ConnectedProps } from "react-redux";
import { getInput } from "../../actions/index";
import { SearchBlock, Input } from './SearchInput.styles';

export const SearchInput: React.FC<InputProps> = () => {
  const dispatch = useDispatch();

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
export default connector(memo(SearchInput));
