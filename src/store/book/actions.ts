import {
  BooksActionData,
  BooksActionTypes,
  BOOKS,
  BOOKS_SUCCESS,
  BOOKS_FAIL,
  SEARCH,
} from './types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store';
import BookService from '../../services/BookService';

export const changeSearch = (
  currentPage: number, searchData: BooksActionData
): ThunkAction<void, RootState, unknown, BooksActionTypes> => async (
  dispatch,
  ) => {
    dispatch({
      type: SEARCH,
      payload: {
        currentPage,
        searchData
      },
    });
  };

export const getBooks = (
  data: BooksActionData,
): ThunkAction<void, RootState, unknown, BooksActionTypes> => async (
  dispatch,
  ) => {
    try {
      dispatch({
        type: BOOKS,
        payload: data,
      });

      const response = await BookService.getBooks(
        data.Busca,
        data.AnoInicial,
        data.AnoFinal,
        data.Sorting,
        data.MaxResultCount,
        data.SkipCount
      );
      dispatch({
        type: BOOKS_SUCCESS,
        payload: response.data,
      });
    } catch (_) {
      dispatch({
        type: BOOKS_FAIL,
        payload: 'Erro ao obter livros',
      });
    }
  };

