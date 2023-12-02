import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, NameSpace } from '../const';
import { useAppDispatch, useAppSelector } from './hooks';
import { logoutAction } from '../store/api-actions';


function UserBlock() {
  const autorizationStatus = useAppSelector((state) => state[NameSpace.User].authorizationStatus);

  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      {autorizationStatus === AuthorizationStatus.Auth ?
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width={63}
                height={63}
              />
            </div>
          </li>
          <li className="user-block__item" onClick={() => {
            dispatch(logoutAction());
          }}
          >
            <Link to={AppRoute.SignIn} className="user-block__link">Sign out</Link>
          </li>
        </> :
        <li className="user-block__item">
          <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
        </li>}
    </ul>
  );
}

export default UserBlock;
