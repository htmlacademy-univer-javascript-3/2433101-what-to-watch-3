import { render, screen } from '@testing-library/react';
import { MoviePageDetails } from './movie-page-details';
import { makeFakeFilmsFilmId } from '../../../utils/mocks';


describe('MoviePageDetails', () => {
  it('renders correctly', () => {
    const mockFakeFilm = makeFakeFilmsFilmId();
    render(<MoviePageDetails filmsFilmId={mockFakeFilm} />);

    expect(screen.getByText(mockFakeFilm.director)).toBeInTheDocument();
    expect(screen.getByText(mockFakeFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(mockFakeFilm.released)).toBeInTheDocument();
    expect(screen.getByText(mockFakeFilm.runTime)).toBeInTheDocument();
  });
});
