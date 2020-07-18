import axios from '../middlewares/axios';
import { BooksSuccessActionData } from '../store/book/types';
import Book from '../models/Book';

class BookService {
  static getBooks(
    Busca: string,
    AnoInicial: number,
    AnoFinal: number,
    Sorting: string,
    MaxResultCount: number,
    SkipCount: number
  ) {
    const url = `/Livros?Busca=${Busca}&AnoInicial=${AnoInicial}&AnoFinal=${AnoFinal}&Sorting=${Sorting}&MaxResultCount=${MaxResultCount}&SkipCount=${SkipCount}`;
    return axios.get<BooksSuccessActionData>(url);
  }

  static getBook(id: string) {
    const url = `/Livros/${id}`;
    return axios.get<Book>(url);
  }
}

export default BookService;
