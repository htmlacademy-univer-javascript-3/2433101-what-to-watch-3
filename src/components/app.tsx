import { Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import { AppRoute } from '../const';
import SignIn from '../Pages/SignIn/SignIn';
import NotFoundScreen from '../Pages/NotFoundScreen/NotFoundScreen';
import MyList from '../Pages/MyList/MyList';
import Film from '../Pages/Film/Film';
import AddReview from '../Pages/AddReview/AddReview';
import Player from '../Pages/Player/Player';
import PrivateRoute from './private-route';
import HistoryRouter from './history-router';
import { browserHistory } from './services/browser-history';
 

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
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
    </HistoryRouter>
  );
}

export default App;
