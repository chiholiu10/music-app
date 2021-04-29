import React from 'react';
import { shallow } from 'enzyme';
import { SearchGenres } from './SearchGenres';
import { Provider } from 'react-redux';
import { store } from "../../Store";

it('check length array of objects', () => {
  const onSearchMock = jest.fn();
  const data = [
    { id: 5, name: "Pop" },
    { id: 6, name: "Electronic/Dance" },
    { id: 8, name: "Rock" },
    { id: 13, name: "Country" },
    { id: 14, name: "Rap/Hip-Hop" },
    { id: 17, name: "Jazz" },
    { id: 24, name: "Latin" },
    { id: 25, name: "R&B/Soul" }
  ];
  const component = shallow(
    <Provider store={store} >
      <SearchGenres onChange={onSearchMock} genreList={data} />
    </Provider>);

  const actual = component.children().props().genreList.length;
  const expected = 8;
  expect(actual).toEqual(expected);
});