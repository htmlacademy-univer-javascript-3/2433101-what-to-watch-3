import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import { AppRoute } from '../const';
import SignIn from '../Pages/SignIn/SignIn';
import NotFoundScreen from '../Pages/NotFoundScreen/NotFoundScreen';
import MyList from '../Pages/MyList/MyList';
import Film from '../Pages/Film/Film';
import AddReview from '../Pages/AddReview/AddReview';
import Player from '../Pages/Player/Player';
import { useAppSelector } from './hooks';
import { LoadingScreen } from '../Pages/LoadingScreen/LoadingScreen';
import PrivateRoute from './private-route';


type TApp = {
  myFilmListData: {[key: string]: string}[];
}

function App(props: TApp): JSX.Element {
  const filmListByGenreData = useAppSelector((state) => state.filmListByGenreData);
  const filmsFilmId = useAppSelector((state) => state.filmsFilmId);

  const isFilmDataLoadingStatus = useAppSelector((state) => state.isFilmDataLoadingStatus);
  if (isFilmDataLoadingStatus || !filmsFilmId) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              filmListByGenreData={filmListByGenreData}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList
                myFilmListData={props.myFilmListData}
                filmListByGenreData={filmListByGenreData}
              />
            </PrivateRoute>
          }
        />
        <Route 
          path={AppRoute.FilmsId} 
          element={<Film filmsFilmId={filmsFilmId} myFilmListData={props.myFilmListData.length} />}
        />
        <Route 
          path={AppRoute.FilmsReview} 
          element={<AddReview filmsFilmId={filmsFilmId} />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player filmsFilmId={filmsFilmId} />}
        />
        <Route
          path={AppRoute.NotFoundScreen}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
