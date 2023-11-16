import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../components/types/state';
import { AxiosInstance } from 'axios';
import { loadFilms, setFilmDataLoadingStatus } from './action';
import { APIRoute } from '../const';
import { TFilms } from '../components/types/films';


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmDataLoadingStatus(true));
    const {data} = await api.get<TFilms[]>(APIRoute.Films);
    dispatch(setFilmDataLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);
