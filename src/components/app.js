'use strict';
let React = require('react');
let Header = require('./common/header');
let PropTypes = require('prop-types');

class App extends React.Component {
  constructor () {
    super();
    this.state = {username: '', token: ''};
  }

  render () {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.any.isRequired
};

module.exports = App;