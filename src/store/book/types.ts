import Book from '../../models/Book';

export const BOOKS = 'book/AUTH';
export const BOOKS_SUCCESS = 'book/BOOKS_SUCCESS';
export const BOOKS_FAIL = 'book/BOOKS_FAIL';
export const SEARCH = 'book/SEARCH';

export interface BookState {
  loading: boolean;
  searchData: BooksActionData;
  books: Book[];
  error: string | null;
  totalCount: number;
  currentPage: number;
  maxPerPage: number;
}

export interface BooksActionData {
  Busca: string;
  AnoInicial: number;
  AnoFinal: number;
  Sorting: string;
  MaxResultCount: number;
  SkipCount: number;
}

export interface BooksSuccessActionData {
  items: Book[],
  totalCount: number;
}

export interface BooksAction {
  type: typeof BOOKS;
  payload: BooksActionData;
}

export interface BooksSuccessAction {
  type: typeof BOOKS_SUCCESS;
  payload: BooksSuccessActionData;
}

export interface BooksFailAction {
  type: typeof BOOKS_FAIL;
  payload: string;
}

export interface SearchAction {
  type: typeof SEARCH;
  payload: {
    currentPage: number;
    searchData: BooksActionData;
  };
}

export type BooksActionTypes =
  | BooksAction
  | BooksSuccessAction
  | BooksFailAction
  | SearchAction;
