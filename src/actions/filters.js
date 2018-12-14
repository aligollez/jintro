// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_TITLE
export const sortByTitle = () => ({
  type: 'SORT_BY_TITLE'
});

// SORT_BY_HITS
export const sortByHits = () => ({
  type: 'SORT_BY_HITS'
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});