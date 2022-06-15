import { createStore, combineReducers } from 'redux';
import getMoviesReducer from './movies/reducer';

const reducers = combineReducers({
	getMoviesReducer,
});

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
