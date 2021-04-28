import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResult from './components/SearchResult/SearchResult';
import SearchGenres from './components/SearchGenres/SearchGenres';
import SearchYear from './components/SearchYear/SearchYear';

export const App = () => {
  return (
    <div className="App">
      <SearchInput />
      <SearchGenres />
      <SearchYear />
      <SearchResult />
    </div>
  );
};

export default App;
