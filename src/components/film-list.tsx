import FilmCard from "./film-card";


type FilmListProps = {
  filmListData: {[key: string]: string}[];
  chooseActiveFilm: (filmId: string) => void;
}

export function FilmList({filmListData, chooseActiveFilm}: FilmListProps) {
  return (
    <>
      {filmListData.map((film) =>
        <FilmCard key={film.filmId} filmId={film.filmId} filmName={film.filmName} srcCard={film.srcCard} chooseActiveFilm={chooseActiveFilm}/>
      )}
    </>
  );
}