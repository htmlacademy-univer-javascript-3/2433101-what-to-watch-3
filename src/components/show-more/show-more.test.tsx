import userEvent from '@testing-library/user-event';
import ShowMore from './show-more';
import { render, screen } from '@testing-library/react';


describe('ShowMoreButton', () => {
  const handle = vi.fn();
  const preparedComponent = <ShowMore handleShowMoreClick={handle} />;  
  it('render correctly', () => {
    render(preparedComponent);
    expect(screen.getByText('Show more')).toBeInTheDocument();
  });
  
  it('click on button', async () => {
    render(preparedComponent);
    await userEvent.click(screen.getByTestId('show more'));
    expect(handle).toBeCalledTimes(1);
  });
});
