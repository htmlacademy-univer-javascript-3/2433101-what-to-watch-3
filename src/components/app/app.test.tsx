import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeFilmListByGenreData, makeFakeFilmPromo, makeFakeFilmsFilmId, makeFakeStore } from '../../utils/mocks';
import { render, screen} from '@testing-library/react';
import { AppRoute, AuthorizationStatus } from '../../const';
import App from './app';
import SignIn from '../../Pages/sign-in/sign-in';
import MyList from '../../Pages/my-list/my-list';
import NotFoundScreen from '../../Pages/not-found-screen/not-found-screen';
import AddReview from '../../Pages/add-review/add-review';
import Player from '../../Pages/player/player';


describe('App', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('render "Main" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const mockPromoFilm = makeFakeFilmPromo();
    const mockFilmCard = makeFakeFilmListByGenreData();
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        DATA: {
          ...makeFakeStore().DATA,
          filmPromo: mockPromoFilm,
          filmListByGenreData: [mockFilmCard]
        },
      })
    );
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByText(mockPromoFilm.name)).toBeInTheDocument();
    expect(screen.getByText(mockFilmCard.name)).toBeInTheDocument();
  });

  it('render "SignIn" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<SignIn />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    mockHistory.push(AppRoute.SignIn);

    render(withStoreComponent);

    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument();
  });

  it('render "MyList" when user navigate to "/mylist"', () => {
    const withHistoryComponent = withHistory(<MyList />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        USER: {
          ...makeFakeStore().USER,
          authorizationStatus: AuthorizationStatus.Auth,
        },
      })
    );
    mockHistory.push(AppRoute.MyList);

    render(withStoreComponent);

    expect(screen.getByText('My list')).toBeInTheDocument();
  });

  it('render "Film" when user navigate to "/films/:id"', () => {
    const film = makeFakeFilmsFilmId();
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        DATA: {
          ...makeFakeStore().DATA,
          filmsFilmId: film,
        },
      })
    );
    mockHistory.push(`/films/${film.id}`);

    render(withStoreComponent);

    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
    expect(screen.getByText('More like this')).toBeInTheDocument();
  });

  it('render "NotFoundScreen" when user navigate to "/*"', () => {
    const withHistoryComponent = withHistory(<NotFoundScreen />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(AppRoute.NotFoundScreen);

    render(withStoreComponent);

    expect(screen.getByText('Error 404')).toBeInTheDocument();
  });

  it('render "AddReview" when user navigate to "/films/:id/review"', () => {
    const film = makeFakeFilmsFilmId();
    const withHistoryComponent = withHistory(<AddReview />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        USER: {
          ...makeFakeStore().USER,
          authorizationStatus: AuthorizationStatus.Auth,
        },
        DATA: {
          ...makeFakeStore().DATA,
          filmsFilmId: film,
          filmPromo: film,
        },
      })
    );
    mockHistory.push(`/films/${film.id}/review`);
    render(withStoreComponent);
    expect(screen.getByText('Add review')).toBeInTheDocument();
  });

  it('render "Player" when user navigate to "/player"', () => {
    const withHistoryComponent = withHistory(<Player />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(AppRoute.Player);
    render(withStoreComponent);
    expect(screen.getByText('Exit')).toBeInTheDocument();
  });
});
