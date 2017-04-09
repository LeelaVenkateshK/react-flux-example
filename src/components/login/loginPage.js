/**
 * Created by WS33 on 3/31/2017.
 */
'use strict';

var React = require('react');
let toastr = require('toastr');
let {hashHistory} = require('react-router');
var InputTextField = require('../common/inputTextField');

class LoginPage extends React.Component {
  constructor () {
    super();
    this.state = {
      userName: '',
      password: '',
      error: {
        userName: '',
        password: ''
      }
    };
  }

  validateUserName (event) {
    let value;
    if (event === null || event === undefined) {
      if (this.state.userName.length < 4) {
        this.state.error.userName = 'User Name should be at least 4 characters';
        this.setState({error: this.state.error});
        return false;
      }
      value = this.state.userName;
    }
    else {
      value = event.target.value;
      if (value.length < 4) {
        this.state.error.userName = 'User Name should be at least 4 characters';
        this.setState({error: this.state.error});
        return false;
      }
    }
    // TODO add db check for userName Value
    this.state.error.userName = '';
    this.setState({error: this.state.error});
    this.setState({userName: value});
    return true;
  }

  validatePassword (event) {
    let value, response = true;
    if (event === null || event === undefined) {
      if (this.state.password.length < 4) {
        this.state.error.password = 'Password should be at least 4 characters';
        this.setState({error: this.state.error});
        response = false;
      }
      value = this.state.password;
    }
    else {
      value = event.target.value;
      if (value.length < 4) {
        this.state.error.password = 'Password should be at least 4 characters';
        this.setState({error: this.state.error});
        response = false;
      }
    }
    if (response) {
      this.state.error.password = '';
      this.setState({error: this.state.error});
      this.setState({password: value});
    }
    return response;
  }

  login (event) {
    event.preventDefault();
    if (!this.validateUserName()) return;
    if (!this.validatePassword()) return;
    toastr['success']('Welcome ' + this.state.userName);

    // Commented just as we are using hashHistory currently for allowing page reload
    // TODO Change to browserHistory
    // browserHistory.push('/authors');
    hashHistory.push('/authors');
  }

  render () {
    return (
      <form className="form-group">
        <InputTextField fieldType="text" fieldName="userName" placeholder="User Name"
                        onTextChange={this.validateUserName.bind(this)}
                        isFieldRequired={true} error={this.state.error.userName}/>
        <InputTextField fieldType="password" fieldName="password" placeholder="Password"
                        onTextChange={this.validatePassword.bind(this)}
                        isFieldRequired={true} error={this.state.error.password}/>
        <button className="btn btn-primary" onClick={this.login.bind(this)}>Submit</button>
      </form>
    );
  }
}

module.exports = LoginPage;