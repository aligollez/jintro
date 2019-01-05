import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addJintro } from './actions/jintros';
import { setTextFilter } from './actions/filters';
import getVisibleJintros from './selectors/jintros';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// const state = store.getState();
// const VisibleJintros = getVisibleJintros(state.jintros, state.filters);
// console.log(VisibleJintros);
// console.log(state)
// console.log(window.location.host);

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#app"));

