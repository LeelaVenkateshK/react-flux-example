'use strict';
import React from 'react';

class Home extends React.Component {
  render () {
    return (
      <div>
        <div className="jumbotron">
          <h1>
            Administration
          </h1>
        </div>
        <p>This will override the Actual "Hello Kris" that was supposed to be
          displayed</p>
      </div>
    );
  }
}

export default Home;