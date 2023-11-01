import { TFilmsData } from '../../mocks/films';

type TMoviePageDatails = {
  filmsData: {[key: string]: TFilmsData};
  activeFilm: string;
}

export function MoviePageDatails({filmsData, activeFilm}: TMoviePageDatails): JSX.Element {
  const starringArray = filmsData[activeFilm].starring.split(', ');
  const formattedStarring = starringArray.map((actor, index) => (
    <>
      {actor}{index !== starringArray.length - 1 && ', '}
      {index !== starringArray.length - 1 && <br />}
      {index !== starringArray.length - 1 && ' '}
    </>
  ));

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{filmsData[activeFilm].director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {formattedStarring}
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{filmsData[activeFilm].runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{filmsData[activeFilm].genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{filmsData[activeFilm].date}</span>
        </p>
      </div>
    </div>
  );
}
