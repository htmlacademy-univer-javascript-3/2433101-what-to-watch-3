import { useNavigate } from 'react-router-dom';
import { LogoTop, LogoBottom } from '../../components/logo';
import { FilmList } from '../../components/film-list';
import ShowMore from '../../components/show-more';
import { useCallback, useMemo, useState } from 'react';
import { NameSpace, defaultVisibleCountFilms } from '../../const';
import UserBlock from '../../components/user-block';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import NotFoundScreen from '../NotFoundScreen/NotFoundScreen';
import GenreList from '../../components/genre-list';
import { postMyListFilmStatus } from '../../store/api-actions';


export default function MainPage(): JSX.Element {
  const [visibleCountFilms, setVisibleCountFilms] = useState(defaultVisibleCountFilms);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleShowMoreClick = () => {
    setVisibleCountFilms(visibleCountFilms + 8);
  };

  const handleShowLessClick = useCallback(() => {
    setVisibleCountFilms(defaultVisibleCountFilms);
  }, []);

  
  const filmPromo = useAppSelector((state) => state[NameSpace.Data].filmPromo);
  const currentGenre = useAppSelector((state) => state[NameSpace.Data].genre);
  const filmListData = useAppSelector((state) => state[NameSpace.Data].filmListByGenreData);
  const myListLength = useAppSelector((state) => state[NameSpace.Data].myListLength);
  
  const filmListByGenreData = useMemo(
    () => currentGenre === 'All genres'
    ? filmListData
    : filmListData.filter((film) => film.genre === currentGenre),
    [filmListData, currentGenre]
    );
    
    
  if (!filmPromo) {
    return <NotFoundScreen />;
  }

  const handleMyFilmStatus = () => {
    dispatch(postMyListFilmStatus({id: filmPromo.id, status: Number(!filmPromo.isFavorite)}));
    navigate('/mylist');
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={filmPromo.backgroundImage}
            alt={filmPromo.name}
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
                <button className="btn btn--list film-card__button" type="button" onClick={handleMyFilmStatus}>
                  {filmPromo.isFavorite ?
                    <svg viewBox="0 0 18 14" width={18} height={14}>
                      <use xlinkHref="#in-list" />
                    </svg>
                    :
                    <svg viewBox="0 0 19 20" width={19} height={20}>
                      <use xlinkHref="#add" />
                    </svg>
                  }
                  <span>My list</span>
                  <span className="film-card__count">{myListLength}</span>
                </button>
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
