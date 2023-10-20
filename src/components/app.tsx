import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import { AppRoute, AuthorizationStatus } from '../const';
import SignIn from '../Pages/SignIn/SignIn';
import NotFoundScreen from '../Pages/NotFoundScreen/NotFoundScreen';
import MyList from '../Pages/MyList/MyList';
import Film from '../Pages/Film/Film';
import AddReview from '../Pages/AddReview/AddReview';
import Player from '../Pages/Player/Player';
import PrivateRoute from './private-route';
import { FilmsDataType } from '../mocks/films';
import { useState } from 'react';


type AppProps = {
  filmsData: {[key: string]: FilmsDataType};
  filmListData: {[key: string]: string}[];
  myFilmListData: {[key: string]: string}[];
}

function App(props: AppProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState('0');

  function chooseActiveFilm(filmId: string): void {
    setActiveFilm(filmId);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              filmData={props.filmsData}
              filmListData={props.filmListData}
              myFilmListData={props.myFilmListData.length}
              activeFilm={activeFilm}
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList
                myFilmListData={props.myFilmListData}
                chooseActiveFilm={chooseActiveFilm}
              />
            </PrivateRoute>
          }
        />
        <Route path="/films/:id" element={<Film filmsData={props.filmsData} myFilmListData={props.myFilmListData.length} activeFilm={activeFilm}/>}/>
        <Route path="/films/:id/review" element={<AddReview filmsData={props.filmsData} activeFilm={activeFilm}/>}/>
        <Route
          path={AppRoute.Player}
          element={<Player filmVideo={props.filmsData[activeFilm].filmVideo} filmPoster={props.filmsData[activeFilm].filmPoster}/>}
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
