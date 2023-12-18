import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-components';
import SignIn from './sign-in';
import userEvent from '@testing-library/user-event';


describe('SignIn', () => {
  it('Render Correctly', () => {
    const login = 'Email address';
    const password = 'Password';
    
    const {withStoreComponent} = withStore(<SignIn />, {});
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByText(login)).toBeInTheDocument();
    expect(screen.getByText(password)).toBeInTheDocument();
  });

  it('render correctly when user enter login and password', async () => {
    const login = 'loginInput';
    const password = 'passwordInput';
    const expectedLogin = 'vlad';
    const expectedPassword = '1324qwerty';
    const {withStoreComponent} = withStore(<SignIn />, {});
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    await userEvent.type(
      screen.getByTestId(login), 
      expectedLogin,
    );

    await userEvent.type(
      screen.getByTestId(password), 
      expectedPassword,
    );

    expect(screen.getByDisplayValue(expectedLogin)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPassword)).toBeInTheDocument();
  })
});