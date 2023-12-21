import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { changeGenreAction } from '../../store/load-data-process/load-data-process';
import { memo, useState } from 'react';


type TGenreList = {
  handleShowLessClick: () => void;
}

function GenreList({handleShowLessClick}: TGenreList): JSX.Element {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState('All genres');

  const hundleChangeGenre = (genre: string) => {
    dispatch(changeGenreAction(genre));
    setActiveTab(genre);
  };

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${activeTab === 'All genres' ? 'catalog__genres-item--active' : ''}`}>
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('All genres');
          handleShowLessClick();
        }}
        >
          All genres
        </Link>
      </li>
      <li className={`catalog__genres-item ${activeTab === 'Comedy' ? 'catalog__genres-item--active' : ''}`}>
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Comedy');
          handleShowLessClick();
        }}
        >
          Comedies
        </Link>
      </li>
      <li className={`catalog__genres-item ${activeTab === 'Crime' ? 'catalog__genres-item--active' : ''}`}>
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Crime');
          handleShowLessClick();
        }}
        >
          Crime
        </Link>
      </li>
      <li className={`catalog__genres-item ${activeTab === 'Fantasy' ? 'catalog__genres-item--active' : ''}`}>
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Fantasy');
          handleShowLessClick();
        }}
        >
          Fantasies
        </Link>
      </li>
      <li className={`catalog__genres-item ${activeTab === 'Drama' ? 'catalog__genres-item--active' : ''}`}>
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Drama');
          handleShowLessClick();
        }}
        >
          Dramas
        </Link>
      </li>
      <li className={`catalog__genres-item ${activeTab === 'Action' ? 'catalog__genres-item--active' : ''}`}>
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Action');
          handleShowLessClick();
        }}
        >
          Actions
        </Link>
      </li>
      <li className={`catalog__genres-item ${activeTab === 'Adventure' ? 'catalog__genres-item--active' : ''}`}>
        <Link to='/' className="catalog__genres-link" onClick={() => {
          hundleChangeGenre('Adventure');
          handleShowLessClick();
        }}
        >
          Adventure
        </Link>
      </li>
      <li className={`catalog__genres-item ${activeTab === 'Thriller' ? 'catalog__genres-item--active' : ''}`}>
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

export default memo(GenreList);
