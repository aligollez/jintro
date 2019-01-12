import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import isBot from 'isbot';

export const ViewerRoute = ({
  jintro,
  component: Component,
  ...rest
}) => {
  if (isBot(navigator.userAgent) || !jintro) {
    window.location = jintro.destinationUrl
  } else {
    return (
      <Route {...rest} component={(props) => (
        // !isBot(navigator.userAgent) || !jintro ? (
        //   window.location = jintro.destinationUrl
        // ) : (
          <Component {...props} />
        // )
      )} />
    )
  }  
}

const mapStateToProps = (state, props) => {
  return {
    jintro: state.jintros.find((jintro) => props.computedMatch.params.id),
  };
};

export default connect(mapStateToProps)(ViewerRoute);