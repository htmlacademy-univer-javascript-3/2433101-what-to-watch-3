import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../components/types/state';
import { AxiosInstance } from 'axios';
import { addCommentAction, loadCommentsAction, loadFilmPromoAction, loadFilmsAction, loadFilmsFilmIdAction, loadSimilarFilmsAction, requireAuthorizationAction, setFilmDataLoadingStatusAction } from './action';
import { APIRoute, AuthorizationStatus } from '../const';
import { TComments, TFilmPromo, TFilms, TFilmsFilmId, TSimilarFilms } from '../components/types/films';
import { AuthData } from '../components/types/auth-data';
import { dropToken, saveToken } from '../components/services/token';
import { UserData } from '../components/types/user-data';


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmDataLoadingStatusAction(true));
    const {data} = await api.get<TFilms[]>(APIRoute.Films);
    dispatch(setFilmDataLoadingStatusAction(false));
    dispatch(loadFilmsAction(data));
  },
);

export const fetchFilmPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFilmPromo',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmDataLoadingStatusAction(true));
    const {data} = await api.get<TFilmPromo>(APIRoute.FilmPromo);
    dispatch(setFilmDataLoadingStatusAction(false));
    dispatch(loadFilmPromoAction(data));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TSimilarFilms[]>(`${APIRoute.Films}/${id}/similar`);
    dispatch(loadSimilarFilmsAction(data));
  },
);


export const fetchFilmsFilmIdAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmsFilmId',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TFilmsFilmId>(`${APIRoute.Films}/${id}`);
    dispatch(loadFilmsFilmIdAction(data));
  },
);
  
export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TComments[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadCommentsAction(data));
  },
);

export const postCommentAction = createAsyncThunk<void, TComments, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComments',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<TComments>(`${APIRoute.Comments}/${id}`, {comment, rating});
    dispatch(addCommentAction(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  }
);
