import { createAction } from '@reduxjs/toolkit';
import { TComments, TFilmPromo, TFilms, TFilmsFilmId, TSimilarFilms } from '../components/types/films';
import { AuthorizationStatus } from '../const';


export const changeGenreAction = createAction<string>('CHANGE_GENRE');
export const changeFilmListByGenreAction = createAction('CHANGE_FILMLIST');

export const loadFilmsAction = createAction<TFilms[]>('data/loadFilms');
export const loadFilmPromoAction = createAction<TFilmPromo>('data/loadFilmPromo');
export const loadFilmsFilmIdAction = createAction<TFilmsFilmId>('data/loadFilmsFilmId');
export const loadSimilarFilmsAction = createAction<TSimilarFilms[]>('data/loadSimilarFilms');

export const loadCommentsAction = createAction<TComments[]>('data/loadComments');
export const addCommentAction = createAction<TComments>('data/addComment');

export const setFilmDataLoadingStatusAction = createAction<boolean>('data/setFilmDataLoadingStatus');

export const requireAuthorizationAction = createAction<AuthorizationStatus>('data/authorizationStatus');
