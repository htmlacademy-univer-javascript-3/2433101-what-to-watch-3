import { withHistory } from '../../utils/mock-components';
import { makeFakeFilmCard } from '../../utils/mocks';
import { FilmList } from './film-list';
import { render, screen } from '@testing-library/react';


describe('FilmList', () => {
  it('render correctly', () => {
    const filmCards = [makeFakeFilmCard()];
    const preparedComponent = withHistory(<FilmList filmListData={filmCards}/>);
    render(preparedComponent);
    expect(screen.getByText(filmCards[0].name)).toBeInTheDocument();
  });
});
