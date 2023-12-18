import { Route, Routes } from 'react-router-dom';
import MainPage from '../../Pages/MainPage/MainPage';
import { AppRoute } from '../../const';
import SignIn from '../../Pages/sign-in/sign-in';
import NotFoundScreen from '../../Pages/not-found-screen/not-found-screen';
import MyList from '../../Pages/MyList/MyList';
import Film from '../../Pages/Film/Film';
import AddReview from '../../Pages/AddReview/AddReview';
import Player from '../../Pages/Player/Player';
import PrivateRoute from '../private-route/private-route';


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
