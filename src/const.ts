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
