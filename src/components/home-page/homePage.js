'use strict';
var React = require('react');

class Home extends React.Component {
  render () {
    return (
      <div>
        <div className="jumbotron">
          <h1>
            Administration
          </h1>
        </div>
        <p>This will override the Actual "Hello Kris" that was supposed to be displayed</p>
      </div>
    );
  }
}

module.exports = Home;