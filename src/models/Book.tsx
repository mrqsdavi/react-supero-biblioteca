import Books from "../screens/Books";

interface ISBN {
  isbn10?: string;
  isbn13?: string;
}

interface BookCreation {
  titulo?: string;
  isbn: ISBN;
  autor?: string;
  editora?: string;
  ano: number;
  idioma: string;
  peso: number;
  comprimento: number;
  largura: number;
  altura: number;
}

interface Book extends BookCreation {
  id: string;
}

export default Book;