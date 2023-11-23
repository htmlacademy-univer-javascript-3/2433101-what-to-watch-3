import { TFilmsData } from '../../mocks/films';
import CommentSubmissionForm from '../../components/comment-submission-form';
import { LogoTop } from '../../components/logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type TAddReview = {
  filmsData: {[key: string]: TFilmsData};
  activeFilm: string;
}

function AddReview({filmsData, activeFilm}: TAddReview): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={filmsData[activeFilm].filmBackgroundImage}
            alt={filmsData[activeFilm].filmName}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <LogoTop />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.FilmsId} className="breadcrumbs__link">
                  {filmsData[activeFilm].filmName}
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
            src={filmsData[activeFilm].filmPoster}
            alt={filmsData[activeFilm].filmName}
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