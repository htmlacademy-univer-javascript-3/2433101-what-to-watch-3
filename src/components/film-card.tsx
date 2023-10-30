import { Link } from 'react-router-dom';
import VideoPlayer from './video-player';
import { useState } from 'react';

type TFilmCard = {
  filmId: string;
  filmName: string;
  srcImage: string;
  srcVideo: string;
  chooseActiveFilm: (filmId: string) => void;
}

function FilmCard({filmId, filmName, srcImage, srcVideo, chooseActiveFilm}: TFilmCard): JSX.Element {
  const [isAimmig, setIsAimming] = useState(false);

  function handleIsAimming() {
    setIsAimming(!isAimmig);
  }

  return (
    <article id={filmId} onMouseEnter={() => handleIsAimming()} onMouseLeave={() => handleIsAimming()} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <VideoPlayer isActive={isAimmig} srcVideo={srcVideo} srcImage={srcImage}/>
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
