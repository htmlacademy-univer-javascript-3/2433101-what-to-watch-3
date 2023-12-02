import { AuthorizationStatus } from '../../const';
import { store } from '../../store';
import { TComments, TFilmPromo, TFilms, TFilmsFilmId } from './films';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type TLoadDataProcess = {
  genre: string;
  filmListByGenreData: TFilms[];
  filmPromo?: TFilmPromo;
  similarFilms: TFilms[];
  filmsFilmId?: TFilmsFilmId;
  myList: TFilms[];
  myListLength: number;
  comments: TComments[];
  isFilmDataLoadingStatus: boolean;
}
