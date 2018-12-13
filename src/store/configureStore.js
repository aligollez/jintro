import { createStore, combineReducers } from 'redux';
import jintroReducer from '../reducers/jintros';
import filtersReducer from '../reducers/filters';


export default () => {
  const store = createStore(
    combineReducers({
      jintros: jintroReducer,
      filters: filtersReducer
    })
  );

  return store;
};
