import { useNavigate, useParams } from 'react-router-dom';
import { LogoBottom, LogoTop } from '../../components/logo/logo';
import { Tabs } from '../../components/tabs/tabs';
import { FilmList } from '../../components/film-list/film-list';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { useEffect } from 'react';
import { fetchCommentsAction, fetchFilmsFilmIdAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AuthorizationStatus, NameSpace, defaultVisibleSimilarFilms } from '../../const';
import UserBlock from '../../components/user-block/user-block';
import { LoadingScreen } from '../loading-screen/loading-screen';
import MyListButton from '../../components/my-list-button/my-list-button';


export function Film(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmsFilmIdAction(id));
      dispatch(fetchSimilarFilmsAction(id));
      dispatch(fetchCommentsAction(id));
    }
  }, [dispatch, id]);

  const filmsFilmId = useAppSelector((state) => state[NameSpace.Data].filmsFilmId);
  const similarFilms = useAppSelector((state) => state[NameSpace.Data].similarFilms);
  const comments = useAppSelector((state) => state[NameSpace.Data].comments);
  const isFilmDataLoadingStatus = useAppSelector((state) => state[NameSpace.Data].isFilmDataLoadingStatus);
  const isAuthorization = useAppSelector((state) => state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth);

  if (!id || !filmsFilmId) {
    return <NotFoundScreen />;
  }

  if (isFilmDataLoadingStatus) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <section
        className="film-card film-card--full"
        style={{ backgroundColor: filmsFilmId.backgroundColor }}
      >
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
            <UserBlock />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmsFilmId.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmsFilmId.genre}</span>
                <span className="film-card__year">{filmsFilmId.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`/player/${filmsFilmId.id}`)}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton id={filmsFilmId.id}/>
                {isAuthorization && (
                  <button className="btn film-card__button" onClick={() => navigate(`/films/${filmsFilmId.id}/review`)}>
                    Add review
                  </button>
                )}
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
