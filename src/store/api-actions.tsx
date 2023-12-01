import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../components/types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { TComments, TFilmPromo, TFilms, TFilmsFilmId, TPostComment, TSimilarFilms } from '../components/types/films';
import { AuthData } from '../components/types/auth-data';
import { dropToken, saveToken } from '../components/services/token';
import { UserData } from '../components/types/user-data';


export const fetchFilmsAction = createAsyncThunk<TFilms[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TFilms[]>(APIRoute.Films);
    return data;
  },
);

export const fetchFilmPromoAction = createAsyncThunk<TFilmPromo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFilmPromo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TFilmPromo>(APIRoute.FilmPromo);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<TSimilarFilms[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<TSimilarFilms[]>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);


export const fetchFilmsFilmIdAction = createAsyncThunk<TFilmsFilmId, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmsFilmId',
  async (id, {extra: api}) => {
    const {data} = await api.get<TFilmsFilmId>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<TComments[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<TComments[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const postCommentAction = createAsyncThunk<TComments, TPostComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComments',
  async ({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<TComments>(`${APIRoute.Comments}/${id}`, {comment, rating});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
