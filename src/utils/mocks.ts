import { internet, datatype, lorem, image, random, name} from 'faker';
import { TComments, TFilmPromo, TFilmsFilmId, TMyListFilm } from '../components/types/films';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { createApi } from '../components/services/api';
import { State } from '../components/types/state';
import { AuthorizationStatus } from '../const';


export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createApi>, Action>;
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeFilmListByGenreData = () => ({
  id: datatype.uuid(),
  name: lorem.words(),
  previewImage: image.imageUrl(),
  previewVideoLink: internet.url(),
  genre: random.word(),
});

export const makeFakeFilmPromo = () => ({
  id: datatype.uuid(),
  name: lorem.words(),
  posterImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  videoLink: internet.url(),
  genre: random.word(),
  released: datatype.number(),
  isFavorite: random.boolean(),
});

export const makeFakeSimilarFilms = () => ({
  id: datatype.uuid(),
  name: lorem.words(),
  previewImage: image.imageUrl(),
  previewVideoLink: internet.url(),
  genre: random.word(),
});

export const makeFakeFilmsFilmId = () => ({
  id: datatype.uuid(),
  name: lorem.words(),
  posterImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: internet.color(),
  videoLink: internet.url(),
  description: lorem.paragraphs(),
  rating: random.number({ min: 0, max: 10, precision: 0.1 }),
  scoresCount: datatype.number(),
  director: name.findName(),
  starring: [name.findName(), name.findName(), name.findName()],
  runTime: datatype.number({ min: 60, max: 180 }),
  genre: random.word(),
  released: datatype.number(),
  isFavorite: random.boolean(),
});

export const makeFakeComments = (): TComments => ({
  id: datatype.uuid(),
  date: datatype.datetime().toString(),
  user: internet.userName(),
  comment: lorem.paragraph(),
  rating: random.number({ min: 0, max: 10, precision: 0.1 }),
});

export const makeFakePostComment = () => ({
  id: datatype.uuid(),
  comment: lorem.paragraph(),
  rating: random.number({ min: 0, max: 10, precision: 0.1 }),
});

export const makeFakeFavoriteFilm = ():TMyListFilm => ({
  id: datatype.uuid(),
  name: lorem.words(),
  previewImage: 'image1.jpg',
  previewVideoLink: 'video1.mp4',
  genre: random.word(),
  posterImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: internet.color(),
  videoLink: internet.url(),
  description: lorem.paragraphs(),
  rating: random.number({ min: 0, max: 10, precision: 0.1 }),
  scoresCount: datatype.number(),
  director: name.findName(),
  starring: [name.findName()],
  runTime: datatype.number({ min: 60, max: 180 }),
  released: datatype.number(),
  isFavorite: random.boolean(),
});

export const makeFakeMyListFilmStatus = () => ({
  id: datatype.uuid(),
  status: 1,
});

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    hasError:false
  },
  DATA: {
    genre: 'All genres',
    filmListByGenreData: [],
    filmPromo: {} as TFilmPromo,
    similarFilms: [],
    filmsFilmId: {} as TFilmsFilmId,
    myList: [],
    myListLength: 0,
    comments: [],
    isFilmDataLoadingStatus: false,
  },
  ...initialState ?? {},
});

export const makeFakeFilmCard = () => ({
  id: datatype.uuid(),
  name: lorem.words(),
  previewImage: image.imageUrl(),
  previewVideoLink: internet.url(),
  genre: random.word(),
});
