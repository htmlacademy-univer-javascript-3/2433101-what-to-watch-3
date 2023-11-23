import CommentSubmissionForm from '../../components/comment-submission-form';
import { LogoTop } from '../../components/logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TFilmsFilmId } from '../../components/types/films';

type TAddReview = {
  filmsFilmId: TFilmsFilmId;
}

function AddReview({filmsFilmId}: TAddReview): JSX.Element {
  return (
    <section className="film-card film-card--full">
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
                <Link to={AppRoute.FilmsId} className="breadcrumbs__link">
                  {filmsFilmId.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
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
        <div className="film-card__poster film-card__poster--small">
          <img
            src={filmsFilmId.posterImage}
            alt={filmsFilmId.name}
            width={218}
            height={327}
          />
        </div>
      </div>
      <CommentSubmissionForm />
    </section>
  );
}

export default AddReview;
