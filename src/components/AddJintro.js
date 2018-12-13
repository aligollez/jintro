import React from 'react';
import { connect } from 'react-redux';
import JintroForm from './JintroForm';
import { addJlink } from '../actions/jintros';

const AddJintro = (props) => {
  return(
    <div>
      <h1>Create a jIntro</h1>
      <JintroForm onSubmit={(jintro) => {
        props.dispatch(addJlink(jintro));
      }}/>    
    </div>
  );  
};

export default connect()(AddJintro);