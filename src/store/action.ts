import { createAction } from '@reduxjs/toolkit';
import { TFilms } from '../components/types/films';


export const changeGenreAction = createAction<string>('CHANGE_GENRE');
export const changeFilmListByGenreAction = createAction('CHANGE_FILMLIST');

export const loadFilms = createAction<TFilms[]>('data/loadFilms');

export const setFilmDataLoadingStatus = createAction<boolean>('data/setFilmDataLoadingStatus');
