export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Player = '/player/:id',
  NotFoundScreen = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
