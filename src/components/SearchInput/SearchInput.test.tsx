import React from 'react';
import { shallow } from 'enzyme';
import { SearchInput } from './SearchInput';
import { Provider } from 'react-redux';
import { store } from "../../Store";

it('check input value', () => {
  const component = shallow(
    <Provider store={store} >
      <SearchInput />
    </Provider>);

  expect(component.find(SearchInput).length).toEqual(1);
});