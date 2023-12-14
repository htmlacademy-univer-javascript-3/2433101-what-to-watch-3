import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFilmsAction, fetchMyList } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import HistoryRouter from './components/history-router';
import { browserHistory } from './components/services/browser-history';


store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchMyList());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer/>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
