import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {BookState, generateInitialBooksState} from '../model/BookState';

export const booksSlice = createSlice({
  name: 'books',
  initialState: generateInitialBooksState(),
  reducers: {
    addBook: (state, {payload}: PayloadAction<BookState>) => {
      state.push(payload);
    },
    reorderBooks: (state, {payload}: PayloadAction<BookState[]>) => {
      state = payload;
      return state;
    },
    handleFavorite: (state, {payload}: PayloadAction<string>) => {
      const currentBook = state.find(item => item.id === payload);
      const isfavoriteAction = !currentBook?.starred;

      // Early termination, if we are favoriting a book and there already
      // is 3 books favorited.
      const numOfFavorited = state.filter(item => item.starred === true).length;
      if (isfavoriteAction && numOfFavorited >= 3) {
        return;
      }

      state.map(book => {
        if (book.id === payload) {
          book.starred = isfavoriteAction ? true : false;
        }
        return book;
      });

      // Redorders the state so that favorited books are always on top
      state.sort((a: any, b: any) => b.starred - a.starred);
      return state;
    },
  },
});

export default booksSlice;
