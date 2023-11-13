import { Link } from 'react-router-dom';
import { TFilmsData } from '../../mocks/films';
import { LogoTop, LogoBottom } from '../../components/logo';
import { GenreList } from '../../components/genre-list';
import { useAppSelector } from '../../components/hooks';
import { FilmList } from '../../components/film-list';
import { ShowMore } from '../../components/show-more';
import { useState } from 'react';


const defaultVisibleCountFilms = 8;

type TMainPage = {
  filmData: {[key: string]: TFilmsData};
  myFilmListData: number;
  chooseActiveFilm: (filmId: string) => void;
  activeFilm: string;
}

function MainPage({filmData, myFilmListData, chooseActiveFilm, activeFilm}: TMainPage): JSX.Element {
  const filmListDataByGenre = useAppSelector((state) => state.filmListData);

  const [visibleCountFilms, setVisibleCountFilms] = useState(defaultVisibleCountFilms);
  const handleShowMoreClick = () => {
    setVisibleCountFilms(visibleCountFilms + 8);
  };
  const handleShowLessClick = () => {
    setVisibleCountFilms(defaultVisibleCountFilms);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={filmData[activeFilm].filmBackgroundImage}
            alt={filmData[activeFilm].filmName}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <LogoTop />
          <ul className="user-block">
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
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={filmData[activeFilm].filmPoster}
                alt={filmData[activeFilm].filmName}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmData[activeFilm].filmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmData[activeFilm].genre}</span>
                <span className="film-card__year">{filmData[activeFilm].date}</span>
              </p>
              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" type="button" to={`/player/${activeFilm}`}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <Link className="btn btn--list film-card__button" type="button" to="/mylist">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{myFilmListData}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList handleShowLessClick={handleShowLessClick}/>
          <div className="catalog__films-list">
            <FilmList filmListData={filmListDataByGenre} chooseActiveFilm={chooseActiveFilm} visibleCountFilms={visibleCountFilms}/>
          </div>
          {visibleCountFilms < filmListDataByGenre.length && <ShowMore handleShowMoreClick={handleShowMoreClick}/>}
        </section>
        <LogoBottom />
      </div>
    </>
  );
}

export default MainPage;
