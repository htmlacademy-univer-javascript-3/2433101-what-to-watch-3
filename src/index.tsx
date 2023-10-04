import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';


const FilmInfo = {
  filmGenrePromo: 'Drama', 
  filmNamePromo: 'The Grand Budapest Hotel', 
  filmDatePromo: '2014',
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App filmGenrePromo = {FilmInfo.filmGenrePromo} filmNamePromo = {FilmInfo.filmNamePromo} filmDatePromo = {FilmInfo.filmDatePromo}/>
  </React.StrictMode>
);
