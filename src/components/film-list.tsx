import FilmCard from './film-card';


type TFilmList = {
  filmListData: {[key: string]: string}[];
  chooseActiveFilm: (filmId: string) => void;
}

export function FilmList({filmListData, chooseActiveFilm}: TFilmList) {
  return (
    <>
      {filmListData.map((film) =>
        <FilmCard key={film.filmId} filmId={film.filmId} filmName={film.filmName} srcImage={film.srcImage} srcVideo={film.srcVideo} chooseActiveFilm={chooseActiveFilm}/>
      )}
    </>
  );
}
