import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResult from './components/SearchResult/SearchResult';
import SearchGenres from './components/SearchGenres/SearchGenres';

export const App = () => {
  return (
    <div className="App">
      <SearchInput/>
      <SearchGenres/>
      <SearchResult/>
    </div>
  );
}

export default App;
