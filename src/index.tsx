import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import { FilmInfo } from './Data/Data';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App filmGenrePromo={FilmInfo.filmGenrePromo} filmNamePromo = {FilmInfo.filmNamePromo} filmDatePromo = {FilmInfo.filmDatePromo}/>
  </React.StrictMode>
);
