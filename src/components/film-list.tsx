import FilmCard from './film-card';


type TFilmList = {
  filmListData: {[key: string]: string}[];
  chooseActiveFilm: (filmId: string) => void;
  visibleCountFilms?: number;
}

export function FilmList({filmListData, chooseActiveFilm, visibleCountFilms}: TFilmList) {
  return (
    <>
      {filmListData.slice(0, visibleCountFilms).map((film) =>
        <FilmCard key={film.filmId} filmId={film.filmId} filmName={film.filmName} srcImage={film.srcImage} srcVideo={film.srcVideo} chooseActiveFilm={chooseActiveFilm}/>
      )}
    </>
  );
}
