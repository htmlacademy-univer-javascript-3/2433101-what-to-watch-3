import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviePageOverview } from './movie-page-overview/movie-page-overview';
import { MoviePageDetails } from './movie-page-details/movie-page-details';
import { MoviePageReviews } from './movie-page-reviews/movie-page-reviews';
import { TComments, TFilmsFilmId } from '../types/films';


type TTabs = {
  filmsFilmId: TFilmsFilmId;
  comments: TComments[];
}

export function Tabs({filmsFilmId, comments}: TTabs): JSX.Element {
  const [activeTab, setActiveTab] = useState('overview');

  const handleActiveTab = (activeTabName: string) => {
    setActiveTab(activeTabName);
  };

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img
            src={filmsFilmId.posterImage}
            alt={filmsFilmId.name}
            width={218}
            height={327}
            data-testid='poster image'
          />
        </div>
        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              <li className={`film-nav__item ${activeTab === 'overview' ? 'film-nav__item--active' : ''}`}>
                <Link to={'#'} className="film-nav__link" onClick={() => handleActiveTab('overview')}>
                  Overview
                </Link>
              </li>
              <li className={`film-nav__item ${activeTab === 'details' ? 'film-nav__item--active' : ''}`}>
                <Link to={'#'} className="film-nav__link" onClick={() => handleActiveTab('details')}>
                  Details
                </Link>
              </li>
              <li className={`film-nav__item ${activeTab === 'reviews' ? 'film-nav__item--active' : ''}`}>
                <Link to={'#'} className="film-nav__link" onClick={() => handleActiveTab('reviews')}>
                  Reviews
                </Link>
              </li>
            </ul>
          </nav>
          {activeTab === 'overview' && (
            <MoviePageOverview filmsFilmId={filmsFilmId}/>
          )}
          {activeTab === 'details' && (
            <MoviePageDetails filmsFilmId={filmsFilmId}/>
          )}
          {activeTab === 'reviews' && (
            <MoviePageReviews comments={comments}/>
          )}
        </div>
      </div>
    </div>
  );
}
