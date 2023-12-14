import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TFilmPromo, TFilmsFilmId } from '../../components/types/films';
import { TLoadDataProcess } from '../../components/types/state';
import { fetchCommentsAction, fetchFilmPromoAction, fetchFilmsAction, fetchFilmsFilmIdAction, fetchMyList, fetchSimilarFilmsAction, postCommentAction, postMyListFilmStatus } from '../api-actions';


const initialState: TLoadDataProcess = {
  genre: 'All genres',
  filmListByGenreData: [],
  filmPromo: {} as TFilmPromo,
  similarFilms: [],
  filmsFilmId: {} as TFilmsFilmId,
  myList: [],
  myListLength: 0,
  comments: [],
  isFilmDataLoadingStatus: false,
};

export const loadDataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeGenreAction: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmDataLoadingStatus = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.isFilmDataLoadingStatus = false;
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
      })
      .addCase(fetchMyList.fulfilled, (state, action) => {
        state.myList = action.payload;
        state.myListLength = action.payload.length;
      })
      .addCase(postMyListFilmStatus.fulfilled, (state, action) => {
        const film = action.payload;
        if (film.isFavorite) {
          state.myList.push(film);
          state.myListLength = state.myList.length;
        } else {
          state.myList.filter((favorite) => favorite.id !== film.id);
          state.myListLength = state.myList.length;
        }
      });
  }
});

export const {changeGenreAction} = loadDataProcess.actions;
