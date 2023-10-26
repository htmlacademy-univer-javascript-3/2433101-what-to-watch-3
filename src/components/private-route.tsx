import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';

type TPrivateRoute = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: TPrivateRoute): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
