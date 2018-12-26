import React from 'react';
import { connect } from 'react-redux';

const EditJintroPage = (props) => {
  console.log(props.match.path);
  console.log('isJintro: ', props.jintro ? props.jintro.isJintro : 'not found!');
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
    </div>
  );
};

const mapStatetoProps = (state, props) => {
  return {
    jintro: state.jintros.find((jintro) => jintro.shortUrl === props.match.params.id)
  };
};

export default connect(mapStatetoProps)(EditJintroPage);