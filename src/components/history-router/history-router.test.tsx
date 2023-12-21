import { render, screen } from '@testing-library/react';
import HistoryRouter from './history-router';
import { createMemoryHistory } from 'history';


describe('HistoryRouter', () => {
  it('render correctly', () => {
    const mockHistory = createMemoryHistory();
    const expectedText = 'djfsdalk;fjasdlk;fjaslk;';
    render(
      <HistoryRouter history={mockHistory}>
        <span>{expectedText}</span>
      </HistoryRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
