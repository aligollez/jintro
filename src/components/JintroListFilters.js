import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByTitle, sortByHits } from '../actions/filters';

const JintroListFilters = (props) => (
  <div>
    <input 
      type="text" 
      value={props.filters.text} 
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }} 
    />
    <select 
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate());
        } else if (e.target.value === 'title') {
          props.dispatch(sortByTitle());
        } else if (e.target.value === 'hits') {
          props.dispatch(sortByHits());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="title">Title</option>
      <option value="hits">Hits</option>
    </select>
  </div>
);

// Grab all filters from the store
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(JintroListFilters); 