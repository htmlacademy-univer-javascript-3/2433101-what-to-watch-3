import { AuthorizationStatus } from '../../const';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import { TFilmPromo, TFilmsFilmId } from '../types/films';
import { State } from '../types/state';
import MyListButton from './my-list-button';
import { render,screen } from '@testing-library/react';


describe('MyListButton', () => {
  it('render correctly', () => {
    const mockFakeStore = makeFakeStore();
    const withHistoryComponent = withHistory(<MyListButton id={'id'}/>);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      mockFakeStore
    );

    render(withStoreComponent);

    expect(screen.getByText('My list')).toBeInTheDocument();
  });

  it('render count if films correctly', () => {
    const makeFakeStore = (initialState?: Partial<State>): State => ({
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
        myListLength: 7,
        comments: [],
        isFilmDataLoadingStatus: false,
      },
      ...initialState ?? {},
    });
    const withHistoryComponent = withHistory(<MyListButton id={'id'}/>);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore(),
    );

    render(withStoreComponent);

    expect(screen.getByText('7')).toBeInTheDocument();
  });
});
