import { createApi } from '../components/services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes, makeFakeComments, makeFakeFilmListByGenreData, makeFakeFilmPromo, makeFakeFilmsFilmId } from '../utils/mocks';
import { checkAuthAction, fetchCommentsAction, fetchFilmPromoAction, fetchFilmsAction, fetchFilmsFilmIdAction, fetchMyList, fetchSimilarFilmsAction, loginAction, logoutAction, postCommentAction, postMyListFilmStatus } from './api-actions';
import { State } from '../components/types/state';
import { APIRoute } from '../const';
import { redirectToRoute } from './action';
import * as tokenStorage from '../components/services/token';


describe('Async actions', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ DATA: { filmListByGenreData: [] }});
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);
      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);
      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('fetchFilms', () => {
    it('dispatch "fetchFilmsAction.pending", "fetchFilmsAction.fulfilled", when server response 200', async () => {
      const mockFilms = [makeFakeFilmListByGenreData()];
      mockAxiosAdapter.onGet(APIRoute.Films).reply(200, mockFilms);
      await store.dispatch(fetchFilmsAction());
      const emittedActions = store.getActions();
      const actions = extractActionsTypes(emittedActions);
      const fetchFilmsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFilmsAction.fulfilled>;
      expect(actions).toEqual([
        fetchFilmsAction.pending.type,
        fetchFilmsAction.fulfilled.type,
      ]);
      expect(fetchFilmsFulfilled.payload).toEqual(mockFilms);
    });

    it('dispatch "fetchFilmsAction.pending", "fetchFilmsAction.rejected", when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Films).reply(400, []);
      await store.dispatch(fetchFilmsAction());
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        fetchFilmsAction.pending.type,
        fetchFilmsAction.rejected.type,
      ]);
    });
  });

  describe('fetchFilmPromoAction', () => {
    it('dispatch "fetchFilmPromoAction.pending", "fetchFilmPromoAction.fulfilled", when server response 200', async () => {
      const mockFilms = [makeFakeFilmPromo()];
      mockAxiosAdapter.onGet(APIRoute.FilmPromo).reply(200, mockFilms);
      await store.dispatch(fetchFilmPromoAction());
      const emittedActions = store.getActions();
      const actions = extractActionsTypes(emittedActions);
      const fetchFilmsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFilmPromoAction.fulfilled>;
      expect(actions).toEqual([
        fetchFilmPromoAction.pending.type,
        fetchFilmPromoAction.fulfilled.type,
      ]);
      expect(fetchFilmsFulfilled.payload).toEqual(mockFilms);
    });

    it('dispatch "fetchFilmPromoAction.pending", "fetchFilmPromoAction.rejected", when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.FilmPromo).reply(400, []);
      await store.dispatch(fetchFilmPromoAction());
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        fetchFilmPromoAction.pending.type,
        fetchFilmPromoAction.rejected.type,
      ]);
    });
  });

  describe('fetchSimilarFilmsAction', () => {
    it('dispatch "fetchSimilarFilmsAction.pending", "fetchSimilarFilmsAction.fulfilled", when server response 200', async () => {
      const id = crypto.randomUUID();
      const mockFilms = [makeFakeFilmListByGenreData()];
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${id}/similar`).reply(200, mockFilms);
      await store.dispatch(fetchSimilarFilmsAction(id));
      const emittedActions = store.getActions();
      const actions = extractActionsTypes(emittedActions);
      const fetchFilmsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchSimilarFilmsAction.fulfilled>;
      expect(actions).toEqual([
        fetchSimilarFilmsAction.pending.type,
        fetchSimilarFilmsAction.fulfilled.type,
      ]);
      expect(fetchFilmsFulfilled.payload).toEqual(mockFilms);
    });

    it('dispatch "fetchSimilarFilmsAction.pending", "fetchSimilarFilmsAction.rejected", when server response 400', async () => {
      const id = crypto.randomUUID();
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${id}/similar`).reply(400, []);
      await store.dispatch(fetchSimilarFilmsAction(id));
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        fetchSimilarFilmsAction.pending.type,
        fetchSimilarFilmsAction.rejected.type,
      ]);
    });
  });

  describe('fetchFilmsFilmIdAction', () => {
    it('dispatch "fetchFilmsFilmIdAction.pending", "fetchFilmsFilmIdAction.fulfilled", when server response 200', async () => {
      const id = crypto.randomUUID();
      const mockFilms = [makeFakeFilmsFilmId()];
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${id}`).reply(200, mockFilms);
      await store.dispatch(fetchFilmsFilmIdAction(id));
      const emittedActions = store.getActions();
      const actions = extractActionsTypes(emittedActions);
      const fetchFilmsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFilmsFilmIdAction.fulfilled>;
      expect(actions).toEqual([
        fetchFilmsFilmIdAction.pending.type,
        fetchFilmsFilmIdAction.fulfilled.type,
      ]);
      expect(fetchFilmsFulfilled.payload).toEqual(mockFilms);
    });

    it('dispatch "fetchFilmsFilmIdAction.pending", "fetchFilmsFilmIdAction.rejected", when server response 400', async () => {
      const id = crypto.randomUUID();
      mockAxiosAdapter.onGet(`${APIRoute.Films}/${id}`).reply(400, []);
      await store.dispatch(fetchFilmsFilmIdAction(id));
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        fetchFilmsFilmIdAction.pending.type,
        fetchFilmsFilmIdAction.rejected.type,
      ]);
    });
  });

  describe('fetchMyList', () => {
    it('dispatch "fetchMyList.pending", "fetchMyList.fulfilled", when server response 200', async () => {
      const mockFilms = [makeFakeFilmsFilmId()];
      mockAxiosAdapter.onGet('/favorite').reply(200, mockFilms);
      await store.dispatch(fetchMyList());
      const emittedActions = store.getActions();
      const actions = extractActionsTypes(emittedActions);
      const fetchFilmsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchMyList.fulfilled>;
      expect(actions).toEqual([
        fetchMyList.pending.type,
        fetchMyList.fulfilled.type,
      ]);
      expect(fetchFilmsFulfilled.payload).toEqual(mockFilms);
    });

    it('dispatch "fetchMyList.pending", "fetchMyList.rejected", when server response 400', async () => {
      mockAxiosAdapter.onGet('/favorite').reply(400, []);
      await store.dispatch(fetchMyList());
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        fetchMyList.pending.type,
        fetchMyList.rejected.type,
      ]);
    });
  });

  describe('postMyListFilmStatus', () => {
    it('dispatch "postMyListFilmStatus.pending", "postMyListFilmStatus.fulfilled", when server response 200', async () => {
      const mockFilms = [makeFakeFilmsFilmId()];
      const id = crypto.randomUUID();
      const favoriteStatus = {
        id: id,
        status: 0,
      };
      mockAxiosAdapter.onPost(`/favorite/${id}/${favoriteStatus.status}`).reply(200, mockFilms);
      await store.dispatch(postMyListFilmStatus(favoriteStatus));
      const emittedActions = store.getActions();
      const extractedActionTypes = extractActionsTypes(emittedActions);
      const postFavoriteStatusFulfilled = emittedActions.at(1) as ReturnType<typeof postMyListFilmStatus.fulfilled>;
      expect(extractedActionTypes).toEqual([
        postMyListFilmStatus.pending.type,
        postMyListFilmStatus.fulfilled.type,
      ]);
      expect(postFavoriteStatusFulfilled.payload).toEqual(mockFilms);
    });

    it('dispatch "fetchMyList.pending", "fetchMyList.rejected", when server response 400', async () => {
      const id = crypto.randomUUID();
      const favoriteStatus = {
        id: id,
        status: 0,
      };
      mockAxiosAdapter.onPost(`/favorite/${id}/${favoriteStatus.status}`).reply(400);
      await store.dispatch(postMyListFilmStatus(favoriteStatus));
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        postMyListFilmStatus.pending.type,
        postMyListFilmStatus.rejected.type,
      ]);
    });
  });

  describe('fetchCommentsAction', () => {
    it('dispatch "fetchCommentsAction.pending", "fetchCommentsAction.fulfilled", when server response 200', async () => {
      const id = crypto.randomUUID();
      const mockFilms = [makeFakeFilmsFilmId()];
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${id}`).reply(200, mockFilms);
      await store.dispatch(fetchCommentsAction(id));
      const emittedActions = store.getActions();
      const actions = extractActionsTypes(emittedActions);
      const fetchFilmsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCommentsAction.fulfilled>;
      expect(actions).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.fulfilled.type,
      ]);
      expect(fetchFilmsFulfilled.payload).toEqual(mockFilms);
    });

    it('dispatch "fetchCommentsAction.pending", "fetchCommentsAction.rejected", when server response 400', async () => {
      const id = crypto.randomUUID();
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${id}`).reply(400, []);
      await store.dispatch(fetchCommentsAction(id));
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.rejected.type,
      ]);
    });
  });

  describe('postCommentAction', () => {
    it('dispatch "postCommentAction.pending", "postCommentAction.fulfilled", when server response 200', async () => {
      const mockComments = [makeFakeComments()];
      const id = crypto.randomUUID();
      const review = {
        id: id,
        comment: '',
        rating: 0,
      };
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${id}`).reply(200, mockComments[0]);
      await store.dispatch(postCommentAction(review));
      const extractedActionTypes = extractActionsTypes(store.getActions());
      expect(extractedActionTypes).toEqual([
        postCommentAction.pending.type,
        redirectToRoute.type,
        postCommentAction.fulfilled.type,
      ]);
    });

    it('dispatch "postCommentAction.pending", "postCommentAction.rejected", when server response 400', async () => {
      const id = crypto.randomUUID();
      const review = {
        id: id,
        comment: '',
        rating: 0,
      };
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${id}`).reply(400);
      await store.dispatch(postCommentAction(review));
      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        postCommentAction.pending.type,
        postCommentAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async() => {
      const fakeUser = {login: 'test@mail.ru', password: 'wqerty1234'};
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('call "saveToken" once with the received token', async () => {
      const fakeUser = {login: 'test@mail.ru', password: 'wqerty1234'};
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async() => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });
});
