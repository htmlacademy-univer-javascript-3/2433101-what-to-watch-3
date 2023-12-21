import { render, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../utils/mock-components';
import { AppRoute } from '../../const';
import { makeFakeFilmsFilmId, makeFakeStore } from '../../utils/mocks';
import { PlayerPage } from './player-page';

describe('PlayerPage', () => {
  const film = makeFakeFilmsFilmId();
  const mockHistory = createMemoryHistory();
  const { withStoreComponent } = withStore(
    withHistory(
      <Routes>
        <Route path={AppRoute.Player} element={<PlayerPage />}></Route>
      </Routes>,
      mockHistory
    ),
    makeFakeStore()
  );
  mockHistory.push(`/player/${film.id}`);

  it('render correctly', () => {
    render(withStoreComponent);
    expect(screen.getByText('Exit')).toBeInTheDocument();
    expect(screen.getByText('Toggler')).toBeInTheDocument();
    expect(screen.getByText('Full screen')).toBeInTheDocument();
  });

  it('video play', async () => {
    render(withStoreComponent);
    await userEvent.click(screen.getByTestId('video button'));

    expect(screen.getByText('Play')).toBeInTheDocument();
  });
});
