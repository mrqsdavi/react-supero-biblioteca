import { createSelector } from 'reselect';
import { RootState } from '../../store';

export const bookStateSelector = (state: RootState) => state.book;

export const loadingSelector = createSelector(
  bookStateSelector,
  (book) => book.loading,
);

export const errorSelector = createSelector(
  bookStateSelector,
  (book) => book.error,
);

export const booksSelector = createSelector(
  bookStateSelector,
  (book) => book.books,
);

export const totalCountSelector = createSelector(
  bookStateSelector,
  (book) => book.totalCount,
);

export const currentPageSelector = createSelector(
  bookStateSelector,
  (book) => book.currentPage,
);

export const maxPerPageSelector = createSelector(
  bookStateSelector,
  (book) => book.maxPerPage,
);


export const searchDataSelector = createSelector(
  bookStateSelector,
  (book) => book.searchData,
);
