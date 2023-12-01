// import { createReducer } from '@reduxjs/toolkit';
// import { changeFilmListByGenreAction, changeGenreAction, loadCommentsAction, loadFilmPromoAction, loadFilmsAction, loadFilmsFilmIdAction, loadSimilarFilmsAction, requireAuthorizationAction, setFilmDataLoadingStatusAction } from './action';
// import { TComments, TFilmPromo, TFilms, TFilmsFilmId, TSimilarFilms } from '../components/types/films';
// import { AuthorizationStatus } from '../const';


// type TInitialState = {
//   genre: string;
//   filmListByGenreData: TFilms[];
//   similarFilms: TSimilarFilms[];
//   filmPromo?: TFilmPromo;
//   filmsFilmId?: TFilmsFilmId;
//   comments: TComments[];
//   authorizationStatus: AuthorizationStatus;
//   isFilmDataLoadingStatus: boolean;
// }

// const initialState: TInitialState = {
//   genre: 'All genres',
//   filmListByGenreData: [],
//   similarFilms: [],
//   filmPromo: {} as TFilmPromo,
//   filmsFilmId: {} as TFilmsFilmId,
//   comments: [],
//   authorizationStatus: AuthorizationStatus.Unknown,
//   isFilmDataLoadingStatus: false,
// };

// export const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(changeGenreAction, (state, action) => {
//       state.genre = action.payload;
//     })
//     .addCase(changeFilmListByGenreAction, (state) => {
//       state.filmListByGenreData = state.genre === 'All genres'
//         ? state.filmListByGenreData
//         : state.filmListByGenreData.filter((film) => film.genre === state.genre);
//     })
//     .addCase(loadFilmsAction, (state, action) => {
//       state.filmListByGenreData = action.payload;
//     })
//     .addCase(loadSimilarFilmsAction, (state, action) => {
//       state.similarFilms = action.payload;
//     })
//     .addCase(loadFilmPromoAction, (state, action) => {
//       state.filmPromo = action.payload;
//     })
//     .addCase(loadFilmsFilmIdAction, (state, action) => {
//       state.filmsFilmId = action.payload;
//     })
//     .addCase(loadCommentsAction, (state, action) => {
//       state.comments = action.payload;
//     })
//     .addCase(setFilmDataLoadingStatusAction, (state, action) => {
//       state.isFilmDataLoadingStatus = action.payload;
//     })
//     .addCase(requireAuthorizationAction, (state, action) => {
//       state.authorizationStatus = action.payload;
//     });
// });
