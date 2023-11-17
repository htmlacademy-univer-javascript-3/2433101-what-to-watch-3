import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import { FilmsData, FilmsReviews } from './mocks/films';
import { MyFilmListData } from './mocks/film-list';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions';


store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        filmsData={FilmsData}
        filmsReviews={FilmsReviews}
        myFilmListData={MyFilmListData}
      />
    </Provider>
  </React.StrictMode>
);
