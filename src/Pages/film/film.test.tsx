import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../const';
import { Route, Routes } from 'react-router-dom';
import { makeFakeFilmsFilmId, makeFakeStore } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-components';
import Film from './film';


describe('Film', () => {
  it('render correctly', () => {
    const film = makeFakeFilmsFilmId();
    const mockHistory = createMemoryHistory();
    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.FilmsId} element={<Film />}></Route>
        </Routes>,
        mockHistory
      ),
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.NoAuth,
          hasError: false,
        },
      })
    );
    mockHistory.push(`/films/${film.id}`);

    render(withStoreComponent);

    expect(screen.getByText('More like this')).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('WTW')).toBeInTheDocument();
    expect(screen.queryByText('Add review')).not.toBeInTheDocument();
  });

  it('add review button with NoAuth', () => {
    const film = makeFakeFilmsFilmId();
    const mockHistory = createMemoryHistory();
    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.FilmsId} element={<Film />}></Route>
        </Routes>,
        mockHistory
      ),
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
          hasError: false,
        },
      })
    );
    mockHistory.push(`/films/${film.id}`);
    render(withStoreComponent);
    expect(screen.getByText('Add review')).toBeInTheDocument();
  });
});
