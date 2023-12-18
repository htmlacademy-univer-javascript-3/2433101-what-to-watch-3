import { render, screen } from '@testing-library/react';
import NotFoundScreen from './not-found-screen';
import { withHistory } from '../../utils/mock-components';


describe('NotFoundScreen', () => {
  it('Render correctly', () => {
    const expectedText = 'Error 404';
    const expectedLinkText = 'Перейти на главную';

    render(withHistory(<NotFoundScreen />));
    
    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
