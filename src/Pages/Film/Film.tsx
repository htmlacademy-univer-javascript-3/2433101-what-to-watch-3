import { Link } from 'react-router-dom';
import { TFilmsData, TFilmsReviews } from '../../mocks/films';
import { LogoBottom, LogoTop } from '../../components/logo';
import { Tabs } from '../../components/tabs/tabs';
import { FilmList } from '../../components/film-list';
import { useAppSelector } from '../../components/hooks';

type TFilm = {
  filmsData: {[key: string]: TFilmsData};
  filmsReviews: {[key: string]: TFilmsReviews[]};
  myFilmListData: number;
  activeFilm: string;
  chooseActiveFilm: (filmId: string) => void;
}

function Film({filmsData, filmsReviews, myFilmListData, activeFilm, chooseActiveFilm}: TFilm): JSX.Element {
  const filmListDataByGenre = useAppSelector((state) => state.filmListByGenreData);
  
  const filmGenre = filmsData[activeFilm].genre;
  const moreLikeThisFilms = filmListDataByGenre.filter((film) => film.genre === filmGenre).slice(0, 4);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={filmsData[activeFilm].filmBackgroundImage}
              alt={filmsData[activeFilm].filmName}
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
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmsData[activeFilm].filmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmsData[activeFilm].genre}</span>
                <span className="film-card__year">{filmsData[activeFilm].date}</span>
              </p>
              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" type="button" to={`/player/${activeFilm}`}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <Link className="btn btn--list film-card__button" type="button" to='/mylist'>
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{myFilmListData}</span>
                </Link>
                <Link className="btn film-card__button" to={`/films/${activeFilm}/review`}>
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Tabs filmsData={filmsData} filmsReviews={filmsReviews} activeFilm={activeFilm}/>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <FilmList filmListData={moreLikeThisFilms} chooseActiveFilm={chooseActiveFilm}/>
          </div>
        </section>
        <LogoBottom />
      </div>
    </>
  );
}

export default Film;
