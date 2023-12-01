import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TFilmPromo, TFilmsFilmId } from '../../components/types/films';
import { TLoadDataProcess } from '../../components/types/state';
import { fetchCommentsAction, fetchFilmPromoAction, fetchFilmsAction, fetchFilmsFilmIdAction, fetchSimilarFilmsAction, postCommentAction } from '../api-actions';


const initialState: TLoadDataProcess = {
  genre: 'All genres',
  filmListData: [],
  filmListByGenreData: [],
  filmPromo: {} as TFilmPromo,
  similarFilms: [],
  filmsFilmId: {} as TFilmsFilmId,
  comments: [],
  isFilmDataLoadingStatus: false,
};

export const loadDataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeGenreAction: (state, action) => {
      state.genre = action.payload;
    },
    changeFilmListByGenreAction: (state) => {
      state.filmListByGenreData = state.genre === 'All genres'
      ? state.filmListData
      : state.filmListData.filter((film) => film.genre === state.genre);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmDataLoadingStatus = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.isFilmDataLoadingStatus = false;
        state.filmListData = action.payload;
        state.filmListByGenreData = action.payload;
      })
      .addCase(fetchFilmPromoAction.pending, (state) => {
        state.isFilmDataLoadingStatus = true;
      })
      .addCase(fetchFilmPromoAction.fulfilled, (state, action) => {
        state.isFilmDataLoadingStatus = false;
        state.filmPromo = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchFilmsFilmIdAction.fulfilled, (state, action) => {
        state.filmsFilmId = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      });
  }
});

export const {changeGenreAction, changeFilmListByGenreAction} = loadDataProcess.actions;
