'use strict';
var React = require('react');
var Header = require('./common/header');

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
App.props = {
  children: React.PropTypes.any.isRequired
};

module.exports = App;