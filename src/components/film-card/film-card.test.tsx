import { withHistory } from '../../utils/mock-components';
import { makeFakeFilmCard } from '../../utils/mocks';
import { fireEvent, render, screen } from '@testing-library/react';
import FilmCard from './film-card';

describe('FilmCard', () => {
  it('render correctly', () => {
    const filmCard = makeFakeFilmCard();
    const preparedComponent = withHistory(<FilmCard id={filmCard.id} name={filmCard.name} previewVideoLink={filmCard.previewVideoLink} previewImage={filmCard.previewImage}/>);
    render(preparedComponent);
    const linkElement = screen.getByRole('link', { name: filmCard.name });
    expect(screen.getByText(filmCard.name)).toBeInTheDocument();
    expect(linkElement).toHaveClass('small-film-card__link');
  });

  it('render VideoPlayer on hover', async () => {
    const filmCard= makeFakeFilmCard();
    const preparedComponent = withHistory(<FilmCard id={filmCard.id} name={filmCard.name} previewVideoLink={filmCard.previewVideoLink} previewImage={filmCard.previewImage}/>);
    render(preparedComponent);

    fireEvent.mouseEnter(screen.getByTestId('card'));

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(screen.getByTestId('video')).toBeInTheDocument();
  });

  it('not render VideoPlayer on hover', async () => {
    const filmCard= makeFakeFilmCard();
    const preparedComponent = withHistory(<FilmCard id={filmCard.id} name={filmCard.name} previewVideoLink={filmCard.previewVideoLink} previewImage={filmCard.previewImage}/>);
    render(preparedComponent);

    fireEvent.mouseEnter(screen.getByTestId('card'));

    await new Promise((resolve) => setTimeout(resolve, 500));

    expect(screen.getByTestId('video')).toBeInTheDocument();
  });
});
