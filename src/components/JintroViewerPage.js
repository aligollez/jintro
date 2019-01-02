import React from 'react';
import { connect } from 'react-redux';
import Countdown from 'react-countdown-now';

const JintroViewerPage = (props) => {
  console.log(props);
  
  const Completionist = () => <a href={props.jintro.destinationUrl} className="destination-url">Click here to skip this ad</a>;
  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return <span className="timer">Skip this ad in {seconds}</span>;
    }
  }

  const RenderJintro = () => {
    if (props.jintro) {
      return (      
        <div className="page-view">
          <div className="viewer-top-bar">
            <Countdown date={Date.now() + 5000} renderer={renderer} />
          </div>
          <iframe width="100%" frameBorder="0" height="100%" src={props.jintro.offerPageUrl} className="viewer-iframe"></iframe>
        </div>          
      )
    } else {
      return <div>Page not found!</div>
    }
  }

  return (
    <RenderJintro />
  )
}

const mapStatetoProps = (state, props) => {
  return {
    jintro: state.jintros.find((jintro) => jintro.shortUrl === props.match.params.id)
  };
};

export default connect(mapStatetoProps)(JintroViewerPage);