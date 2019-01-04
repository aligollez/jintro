import React from 'react';
import { connect } from 'react-redux';
import CountDown from '../components/CountDown';
import isBot from 'isbot';

// console.log('Is this bot? ', isBot("Googlebot/2.1 (+http://www.google.com/bot.html)"))
// console.log('Is this bot? ', isBot("Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"))
// console.log(navigator.userAgent)
// console.log('Is this bot? ', isBot(navigator.userAgent))

const JintroViewerPage = (props) => {
  // console.log(props);    
   
  const RenderJintro = () => {  
    if (props.jintro) {  
      if (isBot(navigator.userAgent) && props.jintro) {
        window.location = props.jintro.destinationUrl;
      } else {
        return (      
          <div className="page-view">
            <div className="viewer-top-bar">
              <CountDown jintro={props.jintro} />
            </div>
            <iframe width="100%" frameBorder="0" height="100%" src={props.jintro.offerPageUrl} className="viewer-iframe"></iframe>
          </div>          
        )
      }        
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