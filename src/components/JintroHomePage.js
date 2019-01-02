import React from 'react';
import { store } from '../store/configureStore';
import { connect } from 'react-redux';
import JintroForm from './JintroForm';
import JintroList from './JintroList';
import { addJintro } from '../actions/jintros';

const JintroHomePage = (props) => {
  console.log('From home page: ', props);
  console.log(store.getState())
  return(
    <div>
      <h1>Create a jIntro</h1>
      <JintroForm onSubmit={(jintro) => {
        props.dispatch(addJintro(jintro));
      }}/>    
      <div>
        <JintroList path="home" />
      </div>
    </div>
  );  
};

export default connect()(JintroHomePage);