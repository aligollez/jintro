import React from 'react';
import { connect } from 'react-redux';
import { removeJintro } from '../actions/jintros';
import { Link } from 'react-router-dom';

const JintroListItem = ({ dispatch, id, title, shortUrl, createdAt, hits, note, isJintro }) => {
  if (window.location.pathname.includes('home')) {
    return (
      <div>
        <p><Link to={`/v/${shortUrl}`}>www.{window.location.host}/v/{shortUrl}</Link></p>
      </div>
    )      
  } else {
    return (
      <div>
        <Link to={`/edit/${shortUrl}`}>
          <h3>{ title ? title : 'No Title (Click to edit)' }</h3>
        </Link>
        <p><Link to={`/v/${shortUrl}`}>www.{window.location.host}/v/{shortUrl}</Link> - {createdAt} (Hits: {hits})</p>
        <p>Description: {note ? note : 'No description (Click to edit)'}</p>
        <button onClick={() => {
          dispatch(removeJintro({ id }));
        }}>Remove</button>
      </div>
    )      
  }
}

export default connect()(JintroListItem);