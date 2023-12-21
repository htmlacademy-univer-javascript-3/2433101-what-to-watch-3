import { fireEvent, render, screen} from '@testing-library/react';
import { Tabs } from './tabs';
import { makeFakeComments, makeFakeFilmsFilmId, makeFakeStore } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-components';


describe('Tabs', () => {
  it('render correctly', () => {
    const mockFakeStore = makeFakeStore();
    const mockCurrentFilm = makeFakeFilmsFilmId();
    const mockReview = makeFakeComments();
    const withHistoryComponent = withHistory(<Tabs filmsFilmId={mockCurrentFilm} comments={[mockReview]}/>);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      mockFakeStore
    );
  
    render(withStoreComponent);
  
    expect(screen.getByTestId('poster image')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Reviews')).toBeInTheDocument();
  });
});
