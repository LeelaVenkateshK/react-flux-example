'use strict';

var React = require('react');
var PropTypes = require('react').prototype;

class AuthorList extends React.Component {
  render () {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><a href={'/#authors/' + author.id}>{author.id}</a></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table table-striped">
          <th>Id</th>
          <th>Name</th>
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