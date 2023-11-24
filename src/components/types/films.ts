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

export type TSimilarFilms = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type TComments = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}
