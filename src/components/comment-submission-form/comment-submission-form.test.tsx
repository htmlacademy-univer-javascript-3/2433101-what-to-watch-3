import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import CommentSubmissionForm from './comment-submission-form';
import { render, screen } from '@testing-library/react';


describe('CommentSubmissionForm', () => {
  it('render currently', () => {

    const withHistoryComponent = withHistory(
      <CommentSubmissionForm id='id'/>
    );
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore(),
    );

    render(withStoreComponent);

    expect(screen.getAllByTestId('rating')).toHaveLength(10);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('input text', async () => {
    const withHistoryComponent = withHistory(
      <CommentSubmissionForm id='id'/>
    );
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore(),
    );
    const expectedText = 'testtesttesttesttesttetstetstetstettttsettetetsttste';

    render(withStoreComponent);

    await userEvent.type(
      screen.getByPlaceholderText('Review text'),
      expectedText,
    );
    expect(screen.getByDisplayValue(expectedText)).toBeInTheDocument();
  });
});
