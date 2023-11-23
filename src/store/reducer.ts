import { createReducer } from '@reduxjs/toolkit';
import { changeFilmListByGenreAction, changeGenreAction, loadFilmPromoAction, loadFilmsAction, loadFilmsFilmIdAction, requireAuthorizationAction, setFilmDataLoadingStatusAction } from './action';
import { TFilmPromo, TFilms, TFilmsFilmId } from '../components/types/films';
import { AuthorizationStatus } from '../const';


type TInitialState = {
  genre: string;
  filmListData: TFilms[];
  filmListByGenreData: TFilms[];
  filmPromo?: TFilmPromo;
  filmsFilmId?: TFilmsFilmId;
  authorizationStatus: AuthorizationStatus;
  isFilmDataLoadingStatus: boolean;
}

const initialState: TInitialState = {
  genre: 'All genres',
  filmListData: [],
  filmListByGenreData: [],
  filmPromo: {} as TFilmPromo,
  filmsFilmId: {} as TFilmsFilmId,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(loadFilmsAction, (state, action) => {
      state.filmListData = action.payload;
      state.filmListByGenreData = action.payload;
    })
    .addCase(loadFilmPromoAction, (state, action) => {
      state.filmPromo = action.payload;
    })
    .addCase(loadFilmsFilmIdAction, (state, action) => {
      state.filmsFilmId = action.payload;
    })
    .addCase(setFilmDataLoadingStatusAction, (state, action) => {
      state.isFilmDataLoadingStatus = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
