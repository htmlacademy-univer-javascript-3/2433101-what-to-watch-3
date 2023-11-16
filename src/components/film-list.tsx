import FilmCard from './film-card';
import { TFilms } from './types/films';


type TFilmList = {
  filmListData: TFilms[];
  chooseActiveFilm: (filmId: string) => void;
  visibleCountFilms?: number;
}

export function FilmList({filmListData, chooseActiveFilm, visibleCountFilms}: TFilmList) {
  return (
    <>
      {filmListData.slice(0, visibleCountFilms).map((film) =>
        <FilmCard key={film.id} id={film.id} name={film.name} previewImage={film.previewImage} previewVideoLink={film.previewVideoLink} chooseActiveFilm={chooseActiveFilm}/>
      )}
    </>
  );
}
