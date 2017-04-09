'use strict';
var React = require('react');
var Link = require('react-router').Link;

class AuthorList extends React.Component {
  render () {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><Link to={'author/' + author.id}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table table-striped table-responsive">
          <thead>
          <td>Id</td>
          <td>Name</td>
          </thead>
          <tbody>
          {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
}

AuthorList.propTypes = {
  authors: React.PropTypes.array.isRequired
};
module.exports = AuthorList;