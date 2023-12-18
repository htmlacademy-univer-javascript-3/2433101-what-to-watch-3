import { render, screen } from '@testing-library/react';
import { LogoBottom, LogoTop } from './logo';
import { withHistory } from '../../utils/mock-components';


describe('Logo', () => {
  it('Render correctly', () => {
    render(withHistory(<LogoTop />));
    render(withHistory(<LogoBottom />));

    expect(screen.getByTestId('logo-top')).toBeInTheDocument();
    expect(screen.getByTestId('logo-bottom')).toBeInTheDocument();
  });
});
  