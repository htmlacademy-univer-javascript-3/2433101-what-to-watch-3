import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import { FilmsData, FilmsReviews } from './mocks/films';
import { MyFilmListData } from './mocks/film-list';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFilmPromoAction, fetchFilmsAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';


store.dispatch(fetchFilmsAction());
store.dispatch(fetchFilmPromoAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App
        filmsData={FilmsData}
        filmsReviews={FilmsReviews}
        myFilmListData={MyFilmListData}
      />
    </Provider>
  </React.StrictMode>
);
