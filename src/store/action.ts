import { createAction } from '@reduxjs/toolkit';
import { TFilms } from '../components/types/films';
import { AuthorizationStatus } from '../const';


export const changeGenreAction = createAction<string>('CHANGE_GENRE');
export const changeFilmListByGenreAction = createAction('CHANGE_FILMLIST');

export const loadFilmsAction = createAction<TFilms[]>('data/loadFilms');
export const setFilmDataLoadingStatusAction = createAction<boolean>('data/setFilmDataLoadingStatus');

export const requireAuthorizationAction = createAction<AuthorizationStatus>('data/authorizationStatus');
