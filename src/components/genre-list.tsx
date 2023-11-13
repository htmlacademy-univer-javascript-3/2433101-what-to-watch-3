import { Link } from 'react-router-dom';
import { useAppDispatch } from './hooks';
import { changeFilmListByGenreAction, changeGenreAction } from '../store/action';


type TGenreList = {
  handleShowLessClick: () => void;
}

export function GenreList({handleShowLessClick}: TGenreList): JSX.Element {
  const dispatch = useAppDispatch();

  const hundleChangeGenre = (genre: string) => {
    dispatch(changeGenreAction(genre));
    dispatch(changeFilmListByGenreAction());
  };

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <Link to='/' className="catalog__genres-link" onClick={() => {hundleChangeGenre('All genres'); handleShowLessClick();}}>
          All genres
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {hundleChangeGenre('Comedies'); handleShowLessClick();}}>
          Comedies
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {hundleChangeGenre('Crime'); handleShowLessClick();}}>
          Crime
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {hundleChangeGenre('Documentary'); handleShowLessClick();}}>
          Documentary
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {hundleChangeGenre('Dramas'); handleShowLessClick();}}>
          Dramas
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {hundleChangeGenre('Horror'); handleShowLessClick();}}>
          Horror
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {hundleChangeGenre('Kids Family'); handleShowLessClick();}}>
          Kids &amp; Family
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {hundleChangeGenre('Romance'); handleShowLessClick();}}>
          Romance
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {hundleChangeGenre('Sci-Fi'); handleShowLessClick();}}>
          Sci-Fi
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {hundleChangeGenre('Thrillers'); handleShowLessClick();}}>
          Thrillers
        </Link>
      </li>
    </ul>
  );
}
