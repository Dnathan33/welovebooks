import booksSlice from './bookSlice';

export const {
  addBook: addBookAction,
  reorderBooks: reorderBooksAction,
  handleFavorite: handleFavoriteAction,
} = booksSlice.actions;
