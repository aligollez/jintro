// Higher Order Component (HOC)

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAminWarning = (WrappedContent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedContent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedContent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedContent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo info="These are the details" isAuthenticated={false} />, document.getElementById('app'));