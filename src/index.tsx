// import '@csstools/normalize.css/opinionated.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { AppRouter } from './components/AppRouter/AppRouter';
import { store } from './store';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
