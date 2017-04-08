'use strict';

var React = require('react');
var Link = require('react-router').Link;

var AuthorApi = require('../../api/AuthorApi');
var AuthorList = require('./authorList');

class AuthorPage extends React.Component {
  constructor () {
    super();
  }

  componentWillMount () {
    // if (this.isMounted()) { // should not be used as deprecated
    this.setState({authors: AuthorApi.getAllAuthors()});
    // }
  }

  render () {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="author" className="btn btn-default">Add User</Link>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
}

module.exports = AuthorPage;