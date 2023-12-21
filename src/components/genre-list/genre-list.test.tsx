import { fireEvent, render, screen } from '@testing-library/react';
import { makeFakeFilmsFilmId, makeFakeStore } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-components';
import GenreList from './genre-list';


describe('GenreList', () => {
  it('render correctly', () => {
    const handleTest = () => {
      makeFakeFilmsFilmId();
    };
    const mockFakeStore = makeFakeStore();
    const withHistoryComponent = withHistory(<GenreList handleShowLessClick={handleTest}/>);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      mockFakeStore
    );

    render(withStoreComponent);

    expect(screen.getByText('All genres')).toBeInTheDocument();
    expect(screen.getByText('Comedies')).toBeInTheDocument();
    expect(screen.getByText('Crime')).toBeInTheDocument();
    expect(screen.getByText('Fantasies')).toBeInTheDocument();
    expect(screen.getByText('Dramas')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Adventure')).toBeInTheDocument();
    expect(screen.getByText('Thrillers')).toBeInTheDocument();
  });

  it('choose genre correctly', () => {
    const handleTest = () => {
      makeFakeFilmsFilmId();
    };
    const mockFakeStore = makeFakeStore();
    const withHistoryComponent = withHistory(<GenreList handleShowLessClick={handleTest}/>);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      mockFakeStore
    );

    render(withStoreComponent);

    expect(screen.getByText('All genres').parentElement).toHaveClass('catalog__genres-item--active');
    fireEvent.click(screen.getByText('Comedies'));
    expect(screen.getByText('All genres').parentElement).not.toHaveClass('catalog__genres-item--active');
    expect(screen.getByText('Comedies').parentElement).toHaveClass('catalog__genres-item--active');
    fireEvent.click(screen.getByText('Crime'));
    expect(screen.getByText('Fantasies').parentElement).not.toHaveClass('catalog__genres-item--active');
    expect(screen.getByText('Crime').parentElement).toHaveClass('catalog__genres-item--active');
  });
});
