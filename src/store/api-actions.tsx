import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../components/types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { TComments, TFilmPromo, TFilms, TFilmsFilmId, TMyListFilm, TMyListFilmStatus, TPostComment} from '../components/types/films';
import { AuthData } from '../components/types/auth-data';
import { dropToken, saveToken } from '../components/services/token';
import { UserData } from '../components/types/user-data';
import { redirectToRoute } from './action';


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

export const fetchSimilarFilmsAction = createAsyncThunk<TFilms[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<TFilms[]>(`${APIRoute.Films}/${id}/similar`);
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

export const fetchMyList = createAsyncThunk<TFilms[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMyList',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TFilms[]>('/favorite');
    return data;
  }
);

export const postMyListFilmStatus = createAsyncThunk<TMyListFilm, TMyListFilmStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postMyListFilmStatus',
  async ({ id, status }, {extra: api }) => {
    const { data } = await api.post<TMyListFilm>(`/favorite/${id}/${status}`);
    return data;
  }
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

export const postCommentAction = createAsyncThunk<void, TPostComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComments',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post(`${APIRoute.Comments}/${id}`, {comment, rating});
    dispatch(redirectToRoute(`films/${id}`));
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
  },
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
    dispatch(redirectToRoute(AppRoute.Main));
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
