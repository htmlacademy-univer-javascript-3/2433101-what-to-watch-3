import { Route, Routes } from 'react-router-dom';
import MainPage from '../../Pages/main-page/main-page';
import { AppRoute } from '../../const';
import SignIn from '../../Pages/sign-in/sign-in';
import NotFoundScreen from '../../Pages/not-found-screen/not-found-screen';
import Film from '../../Pages/film/film';
import AddReview from '../../Pages/add-review/add-review';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../Pages/my-list/my-list';
import Player from '../../Pages/player/player';


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
      <Route path={AppRoute.FilmsId} element={<Film />} />
      <Route path={AppRoute.FilmsReview} element={<AddReview />} />
      <Route path={AppRoute.Player} element={<Player />} />
      <Route path={AppRoute.NotFoundScreen} element={<NotFoundScreen />} />
    </Routes>
  );
}

export default App;
