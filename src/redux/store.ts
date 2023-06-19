import {StateFromReducersMapObject, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import bookReducer, {booksSlice} from './bookSlice';

const reducer = {
  [booksSlice.name]: bookReducer.reducer,
};

export const initStore = () =>
  configureStore({
    reducer,
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
  });

export type ApplicationState = StateFromReducersMapObject<typeof reducer>;
type ApplicationStore = ReturnType<typeof initStore>;

export type AppDispatch = ApplicationStore['dispatch'];
/** Typed hook to access the store */
export const useAppDispatch = () => useDispatch<AppDispatch>();
