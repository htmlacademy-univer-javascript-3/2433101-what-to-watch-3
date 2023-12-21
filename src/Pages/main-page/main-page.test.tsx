import { render, screen } from '@testing-library/react';
import { makeFakeFilmPromo, makeFakeStore } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-components';
import MainPage from './main-page';


describe('MainPage', () => {
  it('renders correctly', () => {
    const promo = makeFakeFilmPromo();
    const { withStoreComponent } = withStore(
      withHistory(<MainPage />),
      makeFakeStore({
        DATA: {
          ...makeFakeStore().DATA,
          filmPromo: promo,
        },
      })
    );
    render(withStoreComponent);
    expect(screen.getByTestId('promo image')).toBeInTheDocument();
    expect(screen.getByText(promo.name)).toBeInTheDocument();
    expect(screen.getByText(promo.genre)).toBeInTheDocument();
    expect(screen.getByText(promo.released)).toBeInTheDocument();
  });
});
