/**
 * Created by WS33 on 3/31/2017.
 */
'use strict';
var React = require('react');
var Link = require('react-router').Link;

class PageNotFound extends React.Component{
  render(){
    return(
      <div>
        <h2>Oops! Page Not Found</h2>
        <h4>{this.props.location.pathname} is not found</h4>
        <Link to="app">Back to Home</Link>
      </div>
    );
  }
}

module.exports = PageNotFound;