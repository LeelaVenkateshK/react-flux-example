/**
 * Created by WS33 on 4/4/2017.
 */
let React = require('react');
let toastr = require('toastr');
let {hashHistory} = require('react-router');

let AuthorForm = require('./authorForm');
let AuthorApi = require('../../api/AuthorApi');

class ManageAuthor extends React.Component {
  constructor () {
    super();
    this.state = {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      }
    };
    toastr.option = {
      'closeButton': false,
      'debug': false,
      'newestOnTop': false,
      'progressBar': false,
      'positionClass': 'toast-top-right',
      'preventDuplicates': false,
      'onclick': null,
      'showDuration': '200',
      'hideDuration': '200',
      'timeOut': '500',
      'extendedTimeOut': '100',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    };
  }

  componentWillMount () {
    let authorId = this.props.params.id;
    if (authorId) {
      this.setState({author: AuthorApi.getAuthorById(authorId)});
    }
  }

  shouldComponentUpdate (newProps, newState) {
    if (this.state !== newState) {
      return true;
    }
    return false;
  }

  setAuthorState (event) {
    let field = event.target.name,
      value = event.target.value, newAuthorInState = this.state.author;
    newAuthorInState[field] = value;
    return this.setState({author: newAuthorInState});
  }

  saveAuthor (event) {
    event.preventDefault();
    AuthorApi.saveAuthor(this.state.author);
    toastr['success']('User ' + this.state.author.firstName + ' saved');
    // Commented just as we are using hashHistory currently for allowing page reload
    // TODO Change to browserHistory
    // browserHistory.push('/authors');
    hashHistory.push('/authors');
  }

  render () {
    return (
      <AuthorForm author={this.state.author}
                  onTextChange={this.setAuthorState.bind(this)}
                  onClick={this.saveAuthor.bind(this)}/>
    );
  }
}
ManageAuthor.propTypes = {
  /**
   * TODO check why this propTypes is failing
   */
  /*params: React.ProtoTypes.any*/
};

module.exports = ManageAuthor;