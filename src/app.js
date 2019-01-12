import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetJintros } from './actions/jintros';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

// ReactDOM.render(<p>Loading...</p>, document.querySelector("#app"));

store.dispatch(startSetJintros()).then(() => {
  ReactDOM.render(jsx, document.querySelector("#app"));
});


