import { makeFakeFilmsFilmId } from '../../../utils/mocks';
import { MoviePageOverview } from './movie-page-overview';
import { render, screen } from '@testing-library/react';


describe('MoviePageOverview', () => {
  it('renders correctly', () => {
    const mockFakeFilm = makeFakeFilmsFilmId();
    render(<MoviePageOverview filmsFilmId={mockFakeFilm} />);
  
    expect(screen.getByTestId('starring')).toBeInTheDocument();
    expect(screen.getByText(`Director: ${mockFakeFilm.director}`)).toBeInTheDocument();
    expect(screen.getByText(mockFakeFilm.scoresCount)).toBeInTheDocument();
    expect(screen.getByText(mockFakeFilm.rating)).toBeInTheDocument();
  });
});
