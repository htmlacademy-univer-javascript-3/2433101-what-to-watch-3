import { TFilmsData } from '../../mocks/films';


type TMoviePageOverview = {
  filmsData: {[key: string]: TFilmsData};
  activeFilm: string;
}

export function MoviePageOverview({filmsData, activeFilm}: TMoviePageOverview): JSX.Element {
  const getRatingLevel = (score: number) => {
    if (score >= 0 && score < 4) {
      return 'Bad';
    } else if (score >= 4 && score < 7) {
      return 'Good';
    } else if (score >= 7 && score <= 10) {
      return 'Very good';
    }
    return 'Unknown';
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {filmsData[activeFilm].rating}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(filmsData[activeFilm].rating)}</span>
          <span className="film-rating__count">
            {filmsData[activeFilm].ratingTable}
          </span>
        </p>
      </div>
      <div className="film-card__text">
        <p>
          {filmsData[activeFilm].description}
        </p>
        <p className="film-card__director">
          <strong>
            Director: {filmsData[activeFilm].director}
          </strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {filmsData[activeFilm].starring}
          </strong>
        </p>
      </div>
    </>
  );
}
