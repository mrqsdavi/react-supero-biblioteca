import {
  BOOKS,
  BOOKS_SUCCESS,
  BOOKS_FAIL,
  SEARCH,
  BookState,
  BooksAction,
  BooksSuccessAction,
  BooksFailAction,
  BooksActionTypes,
  SearchAction
} from './types';

const initialState: BookState = {
  loading: false,
  searchData: {
    Busca: '',
    AnoInicial: 0,
    AnoFinal: 5000,
    Sorting: '',
    MaxResultCount: 5,
    SkipCount: 0,
  },
  books: [],
  error: '',
  totalCount: 0,
  currentPage: 1,
  maxPerPage: 5,
};

const Books = (state: BookState, _: BooksAction) => ({
  ...state,
  loading: true,
});

const BooksSuccess = (state: BookState, action: BooksSuccessAction) => ({
  ...state,
  loading: false,
  error: '',
  books: action.payload.items,
  totalCount: action.payload.totalCount,
});

const BooksFail = (state: BookState, action: BooksFailAction) => ({
  ...state,
  loading: false,
  error: action.payload,
});

const Search = (state: BookState, action: SearchAction) => ({
  ...state,
  currentPage: action.payload.currentPage,
  searchData: {
    ...action.payload.searchData,
    SkipCount: state.maxPerPage * (action.payload.currentPage - 1)
  }
});

function authReducer(state = initialState, action: BooksActionTypes): BookState {
  switch (action.type) {
    case BOOKS:
      return Books(state, action);
    case BOOKS_SUCCESS:
      return BooksSuccess(state, action);
    case BOOKS_FAIL:
      return BooksFail(state, action);
    case SEARCH:
      return Search(state, action);
    default:
      return state;
  }
}

export default authReducer;
