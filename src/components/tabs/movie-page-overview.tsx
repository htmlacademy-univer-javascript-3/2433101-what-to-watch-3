import { TFilmsFilmId } from '../types/films';


type TMoviePageOverview = {
  filmsFilmId: TFilmsFilmId;
}

export function MoviePageOverview({filmsFilmId}: TMoviePageOverview): JSX.Element {
  const getRatingLevel = (score: number) => {
    if (score >= 0 && score < 3) {
      return 'Bad';
    } else if (score >= 3 && score < 5) {
      return 'Normal';
    } else if (score >= 5 && score < 8) {
      return 'Good';
    } else if (score >= 8 && score < 10) {
      return 'Very good';
    } else if (score == 10) {
      return 'Awesome';
    }
    return 'Unknown';
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {filmsFilmId.rating}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(filmsFilmId.rating)}</span>
          <span className="film-rating__count">
            {filmsFilmId.scoresCount}
          </span>
        </p>
      </div>
      <div className="film-card__text">
        <p>
          {filmsFilmId.description}
        </p>
        <p className="film-card__director">
          <strong>
            Director: {filmsFilmId.director}
          </strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {filmsFilmId.starring}
          </strong>
        </p>
      </div>
    </>
  );
}
