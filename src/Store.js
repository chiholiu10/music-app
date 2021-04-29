import { createStore } from 'redux';
import musicList from './reducers';

export const store = createStore(
  musicList
);