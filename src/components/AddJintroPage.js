import React from 'react';
import { connect } from 'react-redux';
import JintroForm from './JintroForm';
import { addJintro } from '../actions/jintros';

const AddJintroPage = (props) => {
  // console.log('From Create page: ', props);
  return(
    <div>
      <h1>Create a jIntro</h1>
      <JintroForm onSubmit={(jintro) => {
        props.dispatch(addJintro(jintro));
        props.history.push('/');
      }}/>    
    </div>
  );  
};

export default connect()(AddJintroPage);