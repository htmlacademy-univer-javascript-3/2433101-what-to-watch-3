import CommentSubmissionForm from '../../components/comment-submission-form';
import { LogoTop } from '../../components/logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TFilmsFilmId } from '../../components/types/films';
import { UserBlock } from '../../components/user-block';

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
