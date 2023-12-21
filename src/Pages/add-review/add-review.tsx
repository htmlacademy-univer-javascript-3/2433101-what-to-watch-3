import CommentSubmissionForm from '../../components/comment-submission-form/comment-submission-form';
import { LogoTop } from '../../components/logo/logo';
import { Link, useParams } from 'react-router-dom';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useEffect } from 'react';
import { fetchFilmsFilmIdAction } from '../../store/api-actions';
import { NameSpace } from '../../const';


function AddReview(): JSX.Element {
  const {id} = useParams();
  const filmsFilmId = useAppSelector((state) => state[NameSpace.Data].filmsFilmId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmsFilmIdAction(id));
    }
  }, [id, dispatch]);

  if (!filmsFilmId || !id) {
    return <NotFoundScreen />;
  }

  return (
    <section
      className="film-card film-card--full"
      style={{ backgroundColor: filmsFilmId.backgroundColor }}
    >
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={filmsFilmId.backgroundImage}
            alt={filmsFilmId.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <LogoTop />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">
                  {filmsFilmId.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" >Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={filmsFilmId.posterImage}
            alt={filmsFilmId.name}
            width={218}
            height={327}
          />
        </div>
      </div>
      <CommentSubmissionForm id={filmsFilmId.id}/>
    </section>
  );
}

export default AddReview;
