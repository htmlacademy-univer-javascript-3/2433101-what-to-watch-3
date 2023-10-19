import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import { FilmsData } from './mocks/films';
import { FilmListData, MyFilmListData } from './mocks/film-list';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App 
      filmsData={FilmsData} 
      filmListData={FilmListData} 
      myFilmListData={MyFilmListData}
    />
  </React.StrictMode>
);
