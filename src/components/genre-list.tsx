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
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('All genres');
          handleShowLessClick();
        }}
        >
          All genres
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Comedy');
          handleShowLessClick();
        }}
        >
          Comedies
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Crime');
          handleShowLessClick();
        }}
        >
          Crime
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Fantasy');
          handleShowLessClick();
        }}
        >
          Fantasies
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Drama');
          handleShowLessClick();
        }}
        >
          Dramas
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Action');
          handleShowLessClick();
        }}
        >
          Actions
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Adventure');
          handleShowLessClick();
        }}
        >
          Adventure
        </Link>
      </li>
      <li className="catalog__genres-item">
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Thriller');
          handleShowLessClick();
        }}
        >
          Thrillers
        </Link>
      </li>
    </ul>
  );
}
