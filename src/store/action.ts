import { createAction } from '@reduxjs/toolkit';


export const changeGenreAction = createAction<string>('CHANGE_GENRE');
export const changeFilmListByGenreAction = createAction('CHANGE_FILMLIST');
