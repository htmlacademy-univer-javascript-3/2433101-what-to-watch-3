import { Link } from 'react-router-dom';
import VideoPlayer from './video-player';
import { useState } from 'react';

type TFilmCard = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
}

function FilmCard({id, name, previewImage, previewVideoLink}: TFilmCard): JSX.Element {
  const [isHover, setIsHover] = useState(false);

  function handleIsHover() {
    setIsHover(!isHover);
  }

  return (
    <article id={id} onMouseEnter={() => handleIsHover()} onMouseLeave={() => handleIsHover()} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <VideoPlayer isActive={isHover} srcVideo={previewVideoLink} srcImage={previewImage}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
