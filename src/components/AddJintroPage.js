import React from 'react';
import { connect } from 'react-redux';
import JintroForm from './JintroForm';
import { startAddJintro } from '../actions/jintros';

const AddJintroPage = (props) => {
  // console.log('From AddJintroPage: ', props.jintro);
  return(
    <div>
      <h1>Create a jIntro</h1>
      <JintroForm onSubmit={(jintro) => {
        props.dispatch(startAddJintro(jintro));
        props.history.push('/');
      }}/>    
    </div>
  );  
};

export default connect()(AddJintroPage);