import { createReducer } from '@reduxjs/toolkit';
import { changeFilmListByGenreAction, changeGenreAction } from './action';
import { FilmListData, TFilmCard } from '../mocks/film-list';


type TInitialState = {
  genre: string;
  filmListData: TFilmCard[];
}

const initialState: TInitialState = {
  genre: 'All genres',
  filmListData: FilmListData,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(changeFilmListByGenreAction, (state) => {
      state.filmListData = state.genre === 'All genres'
        ? FilmListData
        : FilmListData.filter((film) => film.genre === state.genre);
    });
});
