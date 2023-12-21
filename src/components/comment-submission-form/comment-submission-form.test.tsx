import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../utils/mock-components';
import { AppThunkDispatch, extractActionsTypes, makeFakeStore } from '../../utils/mocks';
import CommentSubmissionForm from './comment-submission-form';
import { render, screen } from '@testing-library/react';
import { createApi } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import { APIRoute } from '../../const';
import { postCommentAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import { Action } from 'redux';
import thunk from 'redux-thunk';


describe('CommentSubmissionForm', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ DATA: { comments: [] }});
  });

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
