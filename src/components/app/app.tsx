import { Route, Routes } from 'react-router-dom';
import MainPage from '../../Pages/main-page/main-page';
import { AppRoute } from '../../const';
import SignIn from '../../Pages/sign-in/sign-in';
import NotFoundScreen from '../../Pages/not-found-screen/not-found-screen';
import AddReview from '../../Pages/add-review/add-review';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../Pages/my-list/my-list';
import { FilmPage } from '../../Pages/film-page/film-page';
import { PlayerPage } from '../../Pages/player-page/player-page';


function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage />} />
      <Route path={AppRoute.SignIn} element={<SignIn />} />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.FilmsId} element={<FilmPage />} />
      <Route path={AppRoute.FilmsReview} element={<AddReview />} />
      <Route path={AppRoute.Player} element={<PlayerPage />} />
      <Route path={AppRoute.NotFoundScreen} element={<NotFoundScreen />} />
    </Routes>
  );
}

export default App;
