import React from 'react';
import { connect } from 'react-redux';
import CountDown from '../components/CountDown';

const JintroViewerPage = (props) => {
  // console.log(props);

  const RenderJintro = () => {
    if (props.jintro) {
      return (      
        <div className="page-view">
          <div className="viewer-top-bar">
            <CountDown jintro={props.jintro} />
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