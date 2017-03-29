'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var Header = require('../common/header');

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
        <Header />
        <div>
          <h1>Authors</h1>
          <AuthorList authors={this.state.authors}/>
        </div>
      </div>
    );
  }
}
;

module.exports = AuthorPage;