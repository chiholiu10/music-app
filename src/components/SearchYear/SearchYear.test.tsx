import React from 'react';
import { shallow } from 'enzyme';
import { SearchYear } from './SearchYear';
import { Provider } from 'react-redux';
import { store } from "../../Store";

it('check length array of objects', () => {
  const data = [
    { id: 501437, artist: "Pants Velour", title: "All In", release_year: 2014, genre_id: 14 },
    { id: 501649, artist: "El Koala", title: "Veni paca to", release_year: 2014, genre_id: 8 },
    { id: 501895, artist: "Tom Petty and the Heartbreakers", title: "I Should Have Known It", release_year: 2010, genre_id: 8 },
  ];
  const component = shallow(
    <Provider store={store} >
      <SearchYear videoList={data} />
    </Provider>);

  const actual = component.children().props().videoList.length;
  const expected = 3;
  expect(actual).toEqual(expected);
});