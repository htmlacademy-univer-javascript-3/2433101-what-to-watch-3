import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TFilmPromo, TFilmsFilmId } from '../../components/types/films';
import { TLoadDataProcess } from '../../components/types/state';
import { fetchCommentsAction, fetchFilmPromoAction, fetchFilmsAction, fetchFilmsFilmIdAction, fetchSimilarFilmsAction, postCommentAction } from '../api-actions';


const initialState: TLoadDataProcess = {
  genre: 'All genres',
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
      });
  }
});

export const {changeGenreAction} = loadDataProcess.actions;
