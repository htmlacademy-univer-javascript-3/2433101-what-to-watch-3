import { Link } from 'react-router-dom';

type FilmCardProps = {
  filmId: string;
  filmName: string;
  srcCard: string;
  chooseActiveFilm: (filmId: string) => void;
}

function FilmCard({filmId, filmName, srcCard, chooseActiveFilm}: FilmCardProps): JSX.Element {
  return (
    <article id={filmId} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={srcCard}
          alt={filmName}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link onClick={() => chooseActiveFilm(filmId)} className="small-film-card__link" to={`/films/${filmId}`}>
          {filmName}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
