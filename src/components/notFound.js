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
        <h1>Page Not Found</h1>
        <Link to="app">Back to Home</Link>
      </div>
    );
  }
}

module.exports = PageNotFound;