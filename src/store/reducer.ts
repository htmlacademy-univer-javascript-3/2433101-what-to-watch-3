import { createReducer } from '@reduxjs/toolkit';
import { changeFilmListByGenreAction, changeGenreAction, loadFilms, setFilmDataLoadingStatus } from './action';
import { TFilms } from '../components/types/films';


type TInitialState = {
  genre: string;
  filmListData: TFilms[];
  filmListByGenreData: TFilms[];
  isFilmDataLoadingStatus: boolean;
}

const initialState: TInitialState = {
  genre: 'All genres',
  filmListData: [],
  filmListByGenreData: [],
  isFilmDataLoadingStatus: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(changeFilmListByGenreAction, (state) => {
      state.filmListByGenreData = state.genre === 'All genres'
        ? state.filmListData
        : state.filmListData.filter((film) => film.genre === state.genre);
    })
    .addCase(loadFilms, (state, action) => {
      state.filmListData = action.payload;
      state.filmListByGenreData = action.payload;
    })
    .addCase(setFilmDataLoadingStatus, (state, action) => {
      state.isFilmDataLoadingStatus = action.payload;
    });
});
