import { Link } from 'react-router-dom';
import { LogoTop, LogoBottom } from '../../components/logo';
import { GenreList } from '../../components/genre-list';
import { FilmList } from '../../components/film-list';
import { ShowMore } from '../../components/show-more';
import { useState } from 'react';
import { TFilms } from '../../components/types/films';
import { defaultVisibleCountFilms } from '../../const';
import { UserBlock } from '../../components/user-block';
import { useAppSelector } from '../../components/hooks';


type TMainPage = {
  filmListByGenreData: TFilms[];
  chooseActiveFilm: (filmId: string) => void;
}

function MainPage({filmListByGenreData, chooseActiveFilm}: TMainPage): JSX.Element {
  const [visibleCountFilms, setVisibleCountFilms] = useState(defaultVisibleCountFilms);
  const handleShowMoreClick = () => {
    setVisibleCountFilms(visibleCountFilms + 8);
  };
  const handleShowLessClick = () => {
    setVisibleCountFilms(defaultVisibleCountFilms);
  };

  const filmPromo = useAppSelector((state) => state.filmPromo);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={filmPromo?.backgroundImage}
            alt={filmPromo?.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <LogoTop />
          <UserBlock />
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={filmPromo?.posterImage}
                alt={filmPromo?.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmPromo?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmPromo?.genre}</span>
                <span className="film-card__year">{filmPromo?.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" type="button" to={`/player/${filmPromo?.id}`}>
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
                  <span className="film-card__count">test</span>
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
            <FilmList filmListData={filmListByGenreData} chooseActiveFilm={chooseActiveFilm} visibleCountFilms={visibleCountFilms}/>
          </div>
          {visibleCountFilms < filmListByGenreData.length && <ShowMore handleShowMoreClick={handleShowMoreClick}/>}
        </section>
        <LogoBottom />
      </div>
    </>
  );
}

export default MainPage;
