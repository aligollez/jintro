import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import shortid from 'shortid';

const dateNow = () => {
  var d = new Date();
  return d.getTime();
};

// ADD_JINTRO
const addJintro = (
  {
    destinationUrl = '',
    campaignUrl = '',
    shortUrl = '',
    title = '',
    note = '',
    createdAt = 0
  } = {}
) => (
  {
  type: 'ADD_JINTRO',
  jintro: {
    id: uuid(),
    destinationUrl,
    campaignUrl,
    shortUrl: shortUrl ? shortUrl : shortid.generate(),
    title,
    note,
   createdAt //: dateNow()
  }
});

// REMOVE_JINTRO
const removeJintro = ({ id } = {}) => ({
  type: 'REMOVE_JINTRO',
  id
});

// EDIT_JINTRO
const editJintro = (id, updates) => ({
  type: 'EDIT_JINTRO',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_HITS
const sortByHits = () => ({
  type: 'SORT_BY_HITS'
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});


const jintroReducerDefaultState = [];

const jintroReducer = (state = jintroReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_JINTRO':
      return [
        ...state,
        action.jintro
      ];
    case 'REMOVE_JINTRO':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_JINTRO':
      return state.map((jintro) => {
        if (jintro.id === action.id) {
          return {
            ...jintro,
            ...action.updates
          }
        } else {
          return jintro
        };
      });
    default:
      return state;
  }
}

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_HITS':
      return {
        ...state,
        sortBy: 'hits'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
}

const getVisibleJintros = (jintros, { text, sortBy, startDate, endDate }) => {
  return jintros.filter((jintro) => {
    const startDateMatch = typeof startDate !== 'number' || jintro.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || jintro.createdAt <= endDate;
    const textMatch = jintro.title.toLowerCase().includes(text.toLowerCase()) || jintro.note.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  });
};

const store = createStore(
  combineReducers({
    jintros: jintroReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visbleJintros = getVisibleJintros(state.jintros, state.filters);
  console.log(visbleJintros);
});

const jintroOne = store.dispatch(addJintro({title:'CPA Offer ABC', note: 'CTR', destinationUrl: 'https://google.com', campaignUrl: 'https://yahoo.com', createdAt: 1000}));
const jintroTwo = store.dispatch(addJintro({title:'CPA Offer XYZ', destinationUrl: 'https://facebook.com', campaignUrl: 'https://ebay.com', shortUrl: 'offer', createdAt: -1000}));

// store.dispatch(removeJintro({ id: jintroTwo.jintro.id }));
// store.dispatch(editJintro(jintroTwo.jintro.id, {shortUrl: 'clickbank' }));

store.dispatch(setTextFilter('ctr'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByHits());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));