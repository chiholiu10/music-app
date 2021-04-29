import React from 'react';
import { shallow } from 'enzyme';
import { SearchResult } from './SearchResult';
import { Provider } from 'react-redux';
import { store } from "../../Store";
import { ThemeProvider } from "styled-components";
import theme from '../../styles/Themes';

it('check input value', () => {
  const data = [
    { id: 501437, artist: "Pants Velour", title: "All In", release_year: 2014, genre_id: 14 },
    { id: 501649, artist: "El Koala", title: "Veni paca to", release_year: 2014, genre_id: 8 },
    { id: 501895, artist: "Tom Petty and the Heartbreakers", title: "I Should Have Known It", release_year: 2010, genre_id: 8 },
  ];
  const component = shallow(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SearchResult videoList={data} inputValue='el koala' selectedGenres={[8]} />
      </Provider>
    </ThemeProvider>);

  expect(component.find(SearchResult).length).toEqual(1);
});