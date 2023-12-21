import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import MyListButton from './my-list-button';
import { render,screen } from '@testing-library/react';


describe('MyListButton', () => {
  it('render correctly', () => {
    const mockFakeStore = makeFakeStore();
    const withHistoryComponent = withHistory(<MyListButton id={'id'}/>);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      mockFakeStore
    );

    render(withStoreComponent);

    expect(screen.getByText('My list')).toBeInTheDocument();
  });

  it('render count if films correctly', () => {
    const withHistoryComponent = withHistory(<MyListButton id={'id'}/>);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        DATA: {
          ...makeFakeStore().DATA,
          myListLength: 7,
        },
      }),
    );

    render(withStoreComponent);

    expect(screen.getByText('7')).toBeInTheDocument();
  });
});
