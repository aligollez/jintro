import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addJintro } from './actions/jintros';
import { setTextFilter } from './actions/filters';
import getVisibleJintros from './selectors/jintros';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addJintro({ title: 'Amazon Offer', shortUrl: 'amazon', hits: 150}));

setTimeout(() => {
  store.dispatch(addJintro({ title: 'CJ Offer', hits: 50}));
}, 2000);

setTimeout(() => {
  store.dispatch(addJintro({ title: 'Clickbank Offer', shortUrl: 'offer', hits: 100}));
}, 3000);

const state = store.getState();
const VisibleJintros = getVisibleJintros(state.jintros, state.filters);
console.log(VisibleJintros);

console.log(window.location.host);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#app"));