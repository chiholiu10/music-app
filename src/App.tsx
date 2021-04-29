import React from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResult from './components/SearchResult/SearchResult';
import SearchGenres from './components/SearchGenres/SearchGenres';
import SearchYear from './components/SearchYear/SearchYear';
import { GlobalStyleReset } from "./styles/CssReset";
import { ThemeProvider } from "styled-components";
import { Block } from './styles/General';
import theme from "./styles/Themes";

export const App: React.FC = () => {
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
