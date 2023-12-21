import { useNavigate } from 'react-router-dom';
import { LogoTop, LogoBottom } from '../../components/logo/logo';
import { FilmList } from '../../components/film-list/film-list';
import ShowMore from '../../components/show-more/show-more';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { NameSpace, DEFAULT_VISIBLE_COUNT_FILMS } from '../../const';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import GenreList from '../../components/genre-list/genre-list';
import { fetchFilmPromoAction } from '../../store/api-actions';
import MyListButton from '../../components/my-list-button/my-list-button';


export default function MainPage(): JSX.Element {
  const [visibleCountFilms, setVisibleCountFilms] = useState(DEFAULT_VISIBLE_COUNT_FILMS);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleShowMoreClick = () => {
    setVisibleCountFilms(visibleCountFilms + 8);
  };

  const handleShowLessClick = useCallback(() => {
    setVisibleCountFilms(DEFAULT_VISIBLE_COUNT_FILMS);
  }, []);

  useEffect(() => {
    dispatch(fetchFilmPromoAction());
  }, [dispatch]);

  const filmPromo = useAppSelector((state) => state[NameSpace.Data].filmPromo);
  const currentGenre = useAppSelector((state) => state[NameSpace.Data].genre);
  const filmListData = useAppSelector((state) => state[NameSpace.Data].filmListByGenreData);

  const filmListByGenreData = useMemo(
    () => currentGenre === 'All genres'
      ? filmListData
      : filmListData.filter((film) => film.genre === currentGenre),
    [filmListData, currentGenre]
  );

  if (!filmPromo) {
    return <NotFoundScreen />;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={filmPromo.backgroundImage}
            alt={filmPromo.name}
            data-testid='promo bg'
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
                src={filmPromo.posterImage}
                alt={filmPromo.name}
                width={218}
                height={327}
                data-testid='promo image'
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmPromo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmPromo.genre}</span>
                <span className="film-card__year">{filmPromo.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`/player/${filmPromo.id}`)}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton id={filmPromo.id}/>
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
            <FilmList filmListData={filmListByGenreData} visibleCountFilms={visibleCountFilms}/>
          </div>
          {visibleCountFilms < filmListByGenreData.length && <ShowMore handleShowMoreClick={handleShowMoreClick}/>}
        </section>
        <LogoBottom />
      </div>
    </>
  );
}
