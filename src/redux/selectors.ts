import {ApplicationState} from './store';

export const selectAllBooks = (state: ApplicationState) => state.books;
