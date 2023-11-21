import { useState } from 'react';
import { LogoBottom, LogoTop } from '../../components/logo';
import { loginAction } from '../../store/api-actions';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../components/hooks';
import { useNavigate } from 'react-router-dom';

function SignIn(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (login !== '' && password !== '') {
      dispatch(loginAction({
        login,
        password
      }));
      navigate(AppRoute.Main);
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoTop />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                onChange={(e) => setLogin(e.target.value)}
                value={login}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={handleSubmit}>
              Sign in
            </button>
          </div>
        </form>
      </div>
      <LogoBottom />
    </div>
  );
}

export default SignIn;
