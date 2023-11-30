import { AuthorizationStatus } from '../../const';
import { store } from '../../store';
import { TComments, TFilmPromo, TFilms, TFilmsFilmId, TSimilarFilms } from './films';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type TDataProcess = {
  isFilmDataLoadingStatus: boolean;
  filmListData: TFilms[];
  filmListByGenreData: TFilms[];
  similarFilms: TSimilarFilms[];
  filmPromo?: TFilmPromo;
  filmsFilmId?: TFilmsFilmId;
  comments: TComments[];
}
