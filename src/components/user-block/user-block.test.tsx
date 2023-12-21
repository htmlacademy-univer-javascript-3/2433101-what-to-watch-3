import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import { render,screen } from '@testing-library/react';
import UserBlock from './user-block';
import { AuthorizationStatus } from '../../const';

describe('Component: Header', () => {
  it('should render Auth correctly', () => {
    const withHistoryComponent = withHistory(
      <UserBlock />
    );

    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        USER: {
          ...makeFakeStore().USER,
          authorizationStatus: AuthorizationStatus.Auth,
        },
      })
    );

    render(withStoreComponent);
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should render NoAuth correctly', () => {
    const withHistoryComponent = withHistory(
      <UserBlock />
    );

    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        USER: {
          ...makeFakeStore().USER,
          authorizationStatus: AuthorizationStatus.NoAuth,
        },
      })
    );

    render(withStoreComponent);
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
