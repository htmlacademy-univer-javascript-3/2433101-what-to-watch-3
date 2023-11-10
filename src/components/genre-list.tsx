import { Link } from 'react-router-dom';
import { useAppDispatch } from './hooks';
import { changeFilmListByGenreAction, changeGenreAction } from '../store/action';
import { FilmList } from './film-list';

type TGenreList = {
  filmListData: {[key: string]: string}[];
  chooseActiveFilm: (filmId: string) => void;
}

export function GenreList({filmListData, chooseActiveFilm}: TGenreList): JSX.Element {
  const dispatch = useAppDispatch();

  const hundleChangeGenre = (genre: string) => {
    dispatch(changeGenreAction(genre));
    dispatch(changeFilmListByGenreAction());
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <Link to='/' className="catalog__genres-link" onClick={() => hundleChangeGenre('All genres')}>
            All genres
          </Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='/' className="catalog__genres-link" onClick={() => hundleChangeGenre('Comedies')}>
            Comedies
          </Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='/' className="catalog__genres-link" onClick={() => hundleChangeGenre('Crime')}>
            Crime
          </Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='/' className="catalog__genres-link" onClick={() => hundleChangeGenre('Documentary')}>
            Documentary
          </Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='/' className="catalog__genres-link" onClick={() => hundleChangeGenre('Dramas')}>
            Dramas
          </Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='/' className="catalog__genres-link" onClick={() => hundleChangeGenre('Horror')}>
            Horror
          </Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='/' className="catalog__genres-link" onClick={() => hundleChangeGenre('Kids Family')}>
            Kids &amp; Family
          </Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='/' className="catalog__genres-link" onClick={() => hundleChangeGenre('Romance')}>
            Romance
          </Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='/' className="catalog__genres-link" onClick={() => hundleChangeGenre('Sci-Fi')}>
            Sci-Fi
          </Link>
        </li>
        <li className="catalog__genres-item">
          <Link to='/' className="catalog__genres-link" onClick={() => hundleChangeGenre('Thrillers')}>
            Thrillers
          </Link>
        </li>
      </ul>
      <div className="catalog__films-list">
        <FilmList filmListData={filmListData} chooseActiveFilm={chooseActiveFilm}/>
      </div>
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    </section>
  );
}
