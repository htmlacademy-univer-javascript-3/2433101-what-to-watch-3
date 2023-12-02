export type TFilms = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type TFilmPromo = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type TFilmsFilmId = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type TMyListFilm = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  released: number;
  isFavorite: boolean;
}

export type TComments = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type TPostComment = {
  id: string;
  comment: string;
  rating: number;
}

export type TMyListFilmStatus = {
  id: string;
  status: number;
};
