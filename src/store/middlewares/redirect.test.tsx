import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import { redirect } from './redirect';
import { AnyAction } from '@reduxjs/toolkit';
import { redirectToRoute } from '../action';
import { State } from '../../components/types/state';
import { browserHistory } from '../../components/services/browser-history';
import { AppRoute } from '../../const';


vi.mock('../../browser-history', () => ({
  default: {
    location: { pathname: '' },
    push(path: string) {
      this.location.pathname = path;
    },
  },
}));

describe('Middleware', () => {
  let store: MockStore;

  beforeAll(() => {
    const middleware = [redirect];
    const mockStoreCreator = configureMockStore<State, AnyAction>(middleware);
    store = mockStoreCreator();
  });

  beforeEach(() => {
    browserHistory.push('');
  });

  it('redirects to login page with redirectToRoute action', () => {
    const redirectAction = redirectToRoute(AppRoute.SignIn);
    store.dispatch(redirectAction);
    expect(browserHistory.location.pathname).toBe(AppRoute.SignIn);
  });

  it('doesn\'t redirect to main page with empty action', () => {
    const emptyAction = { type: '', payload: AppRoute.Main };
    store.dispatch(emptyAction);
    expect(browserHistory.location.pathname).not.toBe(AppRoute.Main);
  });
});
