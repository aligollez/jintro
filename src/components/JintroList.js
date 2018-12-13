import React from 'react';
import { connect  } from 'react-redux';

const JintroList = (props) => (
  <div>
    <h1>Jintro List</h1>
    {props.name}
  </div>
);

const ConnectedJintroList = connect(() => {
  return {
    name: "PG"
  };
})(JintroList);

export default ConnectedJintroList;