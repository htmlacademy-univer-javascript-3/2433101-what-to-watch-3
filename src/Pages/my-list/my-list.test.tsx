import { render, screen } from '@testing-library/react';
import { makeFakeStore } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-components';
import MyList from './my-list';


describe('MyList', () => {
  it('render correctly', () => {
    const { withStoreComponent } = withStore(withHistory(<MyList />), makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
  });
});
