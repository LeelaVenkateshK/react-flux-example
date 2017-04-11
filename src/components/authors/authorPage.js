'use strict';

let React = require('react');
let Link = require('react-router').Link;

let AuthorList = require('./authorList');
let AuthorActions = require('../../actions/authorActions');
let AuthorStore = require('../../stores/authorStore');

class AuthorPage extends React.Component {
  constructor () {
    super();
    // this.state = {authors: AuthorStore.getAllAuthors()};
  }

  componentWillMount () {
    // if (this.isMounted()) { // should not be used as deprecated
    this.setState({authors: AuthorStore.getAllAuthors()});
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