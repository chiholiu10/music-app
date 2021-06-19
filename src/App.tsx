import React, { useEffect } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResult from './components/SearchResult/SearchResult';
import SearchGenres from './components/SearchGenres/SearchGenres';
import SearchYear from './components/SearchYear/SearchYear';
import { useDispatch } from "react-redux";
import { GlobalStyleReset } from "./styles/CssReset";
import { ThemeProvider } from "styled-components";
import { getData } from "./actions/index";
import { Block } from './styles/General';
import theme from "./styles/Themes";

export const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        // history.push({
        //   pathname: '/404'
        // });
        throw response;
      })
      .then(data => {
        dispatch(getData(data));
      });
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleReset />
      <SearchInput />
      <Block>
        <SearchGenres />
        <SearchYear />
      </Block>
      <SearchResult />
    </ThemeProvider>
  );
};

export default App;
