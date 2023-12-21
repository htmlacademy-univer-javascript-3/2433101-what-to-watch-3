import { AuthorizationStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { userProcess } from './user-process';


describe('UseProcess Slice', () => {
  it('Return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { authorizationStatus: AuthorizationStatus.Unknown, hasError: false};
    const result = userProcess.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('Return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { authorizationStatus: AuthorizationStatus.Unknown, hasError: false };
    const result = userProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('set "authorizationStatus" to "Auth" with "checkAuthAction.fulfilled" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.Unknown, hasError: false };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth, hasError: false };
    const result = userProcess.reducer(initialState, checkAuthAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('set "authorizationStatus" to "Auth" with "checkAuthAction.rejected" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.Unknown, hasError: false };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, hasError: false };
    const result = userProcess.reducer(initialState, checkAuthAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('set "authorizationStatus" to "Auth" with "loginAction.fulfilled" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.NoAuth, hasError: false };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth, hasError: false };
    const result = userProcess.reducer(initialState, loginAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('set "authorizationStatus" to "Auth" with "loginAction.rejected" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.Unknown, hasError: false };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, hasError: true };
    const result = userProcess.reducer(initialState, loginAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('set "authorizationStatus" to "Auth" with "logoutAction.fulfilled" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.Auth, hasError: false };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, hasError: false };
    const result = userProcess.reducer(initialState, logoutAction.fulfilled);
    expect(result).toEqual(expectedState);
  });
});
