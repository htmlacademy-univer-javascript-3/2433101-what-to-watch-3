import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { AppRoute } from '../../const';
import { Route, Routes } from 'react-router-dom';
import AddReview from './add-review';
import { makeFakeFilmsFilmId, makeFakeStore } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-components';


describe('AddReview', () => {
  it('render correctly', () => {
    const mockHistory = createMemoryHistory();
    const film = makeFakeFilmsFilmId();
    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.FilmsReview} element={<AddReview />}></Route>
        </Routes>,
        mockHistory
      ),
      makeFakeStore()
    );
    mockHistory.push(`/films/${film.id}/review`);

    render(withStoreComponent);

    expect(screen.getByText('Add review')).toBeInTheDocument();
    expect(screen.getByText('Post')).toBeInTheDocument();
  });
});
