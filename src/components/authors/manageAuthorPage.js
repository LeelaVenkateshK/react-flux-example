/**
 * Created by WS33 on 4/4/2017.
 */
let React = require('react');
let AuthorForm = require('./authorForm');
let AuthorApi = require('../../api/AuthorApi');
let toastr = require('toastr');

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

  shouldComponentUpdate (newProps, newState) {
    console.log('In ManageAuthorPage shouldComponentUpdate');
    if (this.state !== newState) {
      console.log('should update');
      return true;
    }
    return false;
  }

  setAuthorState (event) {
    let field = event.target.name,
      value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  }

  render () {
    return (
      <AuthorForm author={this.state.author}
                  onTextChange={this.setAuthorState}
                  onClick={this.saveAuthor.bind(this)}/>
    );
  }

  saveAuthor (event) {
    event.preventDefault();
    console.log(this.state.author);
    AuthorApi.saveAuthor(this.state.author);
    toastr['success']('User ' + this.state.author.firstName + ' saved');
  }
}

module.exports = ManageAuthor;