import { Link, useParams } from 'react-router-dom';
import { LogoBottom, LogoTop } from '../../components/logo';
import { Tabs } from '../../components/tabs/tabs';
import { FilmList } from '../../components/film-list';
import { TFilmsFilmId } from '../../components/types/films';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { useEffect } from 'react';
import { fetchCommentsAction, fetchFilmsFilmIdAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import NotFoundScreen from '../NotFoundScreen/NotFoundScreen';
import { defaultVisibleSimilarFilms } from '../../const';


type TFilm = {
  filmsFilmId: TFilmsFilmId;
  myFilmListData: number;
}

function Film({filmsFilmId, myFilmListData}: TFilm): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmsFilmIdAction(id));
      dispatch(fetchSimilarFilmsAction(id));
      dispatch(fetchCommentsAction(id));
    }
  }, [dispatch, id]);
  
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const comments = useAppSelector((state) => state.comments);

  if (!id || !filmsFilmId) {
    return <NotFoundScreen />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={filmsFilmId.backgroundImage}
              alt={filmsFilmId.name}
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
              <h2 className="film-card__title">{filmsFilmId.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmsFilmId.genre}</span>
                <span className="film-card__year">{filmsFilmId.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" type="button" to={`/player/${filmsFilmId.id}`}>
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
                <Link className="btn film-card__button" to={`/films/${filmsFilmId.id}/review`}>
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Tabs filmsFilmId={filmsFilmId} comments={comments}/>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <FilmList filmListData={similarFilms} visibleCountFilms={defaultVisibleSimilarFilms}/>
          </div>
        </section>
        <LogoBottom />
      </div>
    </>
  );
}

export default Film;
