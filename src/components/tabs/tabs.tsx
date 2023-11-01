import { useState } from 'react';
import { TFilmsData, TFilmsReviews } from '../../mocks/films';
import { Link } from 'react-router-dom';
import { MoviePageOverview } from './movie-page-overview';
import { MoviePageDatails } from './movie-page-details';
import { MoviePageReviews } from './movie-page-reviews';


type TTabs = {
  filmsData: {[key: string]: TFilmsData};
  filmsReviews: {[key: string]: TFilmsReviews[]};
  activeFilm: string;
}

export function Tabs({filmsData, filmsReviews, activeFilm}: TTabs): JSX.Element {
  const [activeTab, setActiveTab] = useState('overview');

  const handleActiveTab = (activeTabName: string) => {
    setActiveTab(activeTabName);
  };

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img
            src={filmsData[activeFilm].filmPoster}
            alt={filmsData[activeFilm].filmName}
            width={218}
            height={327}
          />
        </div>
        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              <li className="film-nav__item film-nav__item--active">
                <Link to={`/films/${activeFilm}`} className="film-nav__link" onClick={() => handleActiveTab('overview')}>
                  Overview
                </Link>
              </li>
              <li className="film-nav__item">
                <Link to={`/films/${activeFilm}`} className="film-nav__link" onClick={() => handleActiveTab('details')}>
                  Details
                </Link>
              </li>
              <li className="film-nav__item">
                <Link to={`/films/${activeFilm}`} className="film-nav__link" onClick={() => handleActiveTab('reviews')}>
                  Reviews
                </Link>
              </li>
            </ul>
          </nav>
          {activeTab === 'overview' && (
            <MoviePageOverview filmsData={filmsData} activeFilm={activeFilm}/>
          )}
          {activeTab === 'details' && (
            <MoviePageDatails filmsData={filmsData} activeFilm={activeFilm}/>
          )}
          {activeTab === 'reviews' && (
            <MoviePageReviews filmsReviews={filmsReviews} activeFilm={activeFilm}/>
          )}
        </div>
      </div>
    </div>
  );
}
