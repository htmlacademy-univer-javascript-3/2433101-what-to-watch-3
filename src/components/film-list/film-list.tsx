import FilmCard from '../film-card/film-card';
import { TFilms } from '../types/films';


type TFilmList = {
  filmListData: TFilms[];
  visibleCountFilms?: number;
}

export function FilmList({filmListData, visibleCountFilms}: TFilmList) {
  return (
    <>
      {filmListData.slice(0, visibleCountFilms).map((film) =>
        <FilmCard key={film.id} id={film.id} name={film.name} previewImage={film.previewImage} previewVideoLink={film.previewVideoLink} />
      )}
    </>
  );
}
