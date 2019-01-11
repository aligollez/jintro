import React from 'react';
import { connect  } from 'react-redux';
import JintroListItem from './JintroListItem';
import selectJintro from '../selectors/jintros';

export const JintroList = (props) => (
  <div>
    {
      props.jintros.length === 0 ? (
        <p>You have no jIntros to show.</p>
      ) : (
        props.jintros.map((jintro) => {
          return <JintroListItem key={jintro.id} {...jintro} />
         
        })
      )      
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    jintros: selectJintro(state.jintros, state.filters)
  };
};

export default connect(mapStateToProps)(JintroList);