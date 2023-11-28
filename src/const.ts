export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Player = '/player/:id',
  FilmsId = '/films/:id',
  FilmsReview = '/films/:id/review',
  NotFoundScreen = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Films = '/films',
  FilmPromo = '/promo',
  Comments = '/comments',
}

export const defaultVisibleCountFilms = 8;
export const defaultVisibleSimilarFilms = 4;
