import React from 'react';
import JintroList from './JintroList';
import JintroListFilters from './JintroListFilters';

const JintroDashboardPage = () => (
  <div>
    <JintroListFilters />
    <JintroList />
  </div>
);

export default JintroDashboardPage;