import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import { AppRoute } from '../const';
import SignIn from '../Pages/SignIn/SignIn';
import NotFoundScreen from '../Pages/NotFoundScreen/NotFoundScreen';
import MyList from '../Pages/MyList/MyList';
import Film from '../Pages/Film/Film';
import AddReview from '../Pages/AddReview/AddReview';
import Player from '../Pages/Player/Player';
import { TFilmsData, TFilmsReviews } from '../mocks/films';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { LoadingScreen } from '../Pages/LoadingScreen/LoadingScreen';
import PrivateRoute from './private-route';
import { fetchFilmsFilmIdAction } from '../store/api-actions';


type TApp = {
  filmsData: {[key: string]: TFilmsData};
  filmsReviews: {[key: string]: TFilmsReviews[]};
  myFilmListData: {[key: string]: string}[];
}

function App(props: TApp): JSX.Element {
  const filmListByGenreData = useAppSelector((state) => state.filmListByGenreData);

  const [activeFilm, setActiveFilm] = useState('1');

  function chooseActiveFilm(filmId: string): void {
    setActiveFilm(filmId);
  }


  // const filmsFilmId = useAppSelector((state) => state.filmsFilmId);

  // const dispatch = useAppDispatch();
  // function handleFilmsFilmId(id: string) {
  //   dispatch(fetchFilmsFilmIdAction(id));
  // }

  const isFilmDataLoadingStatus = useAppSelector((state) => state.isFilmDataLoadingStatus);
  if (isFilmDataLoadingStatus) {
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
              chooseActiveFilm={chooseActiveFilm}
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
                chooseActiveFilm={chooseActiveFilm}
              />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.FilmsId} element={<Film filmsData={props.filmsData} filmsReviews={props.filmsReviews} filmListByGenreData={filmListByGenreData} myFilmListData={props.myFilmListData.length} activeFilm={activeFilm} chooseActiveFilm={chooseActiveFilm}/>}/>
        <Route path={AppRoute.FilmsReview} element={<AddReview filmsData={props.filmsData} activeFilm={activeFilm}/>}/>
        <Route
          path={AppRoute.Player}
          element={<Player filmVideo={props.filmsData[activeFilm].srcVideo} filmPoster={props.filmsData[activeFilm].filmPoster}/>}
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
