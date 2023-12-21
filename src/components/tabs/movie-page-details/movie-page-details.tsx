import { useMemo } from 'react';
import { TFilmsFilmId } from '../../types/films';

type TMoviePageDatails = {
  filmsFilmId: TFilmsFilmId;
}

export function MoviePageDetails({filmsFilmId}: TMoviePageDatails): JSX.Element {
  const formattedStarring = useMemo(() => filmsFilmId.starring.map((actor, index) => (
    <>
      {actor}{index !== filmsFilmId.starring.length - 1 && ', '}
      {index !== filmsFilmId.starring.length - 1 && <br />}
      {index !== filmsFilmId.starring.length - 1 && ' '}
    </>
  )), [filmsFilmId]);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{filmsFilmId.director}</span>
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
          <span className="film-card__details-value">{filmsFilmId.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{filmsFilmId.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{filmsFilmId.released}</span>
        </p>
      </div>
    </div>
  );
}
