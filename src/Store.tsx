import { createStore } from 'redux';
import videoList from './reducers';

export const store = createStore(
	videoList
);