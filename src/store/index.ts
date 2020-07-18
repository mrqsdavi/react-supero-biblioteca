import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './book/reducers';
import { BookState } from './book/types';

export interface RootState {
  book: BookState;
}

const rootReducer = combineReducers<RootState>({
  book: bookReducer,
});

const middlewares = [thunk];

const STORE = createStore(
  rootReducer,
  {},
  applyMiddleware(...middlewares)
);

export default STORE;
