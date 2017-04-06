/**
 * Created by WS33 on 3/31/2017.
 */
'use strict';

var React = require('react');
let toastr = require('toastr');
let {Router, browserHistory} = require('react-router');
var InputTextField = require('../common/inputTextField');


class LoginPage extends React.Component {
  constructor () {
    super();
    this.state = {
      userName: '',
      password: ''
    };
  }

  validateUserName (event) {
    let value = event.target.value;
    if (value.length < 4) {
      return false;
    }
    // TODO add db check for userName Value
    this.setState({userName: value});
  }

  validatePassword (event) {
    let value = event.target.value;
    if (value.length < 4) {
      return false;
    }
    this.setState({password: value});
  }

  render () {
    return (
      <form className="form-group">
        <InputTextField fieldType="text" fieldName="userName" placeholder="User Name"
                        onTextChange={this.validateUserName.bind(this)}
                        isFieldRequired={true}/>
        <InputTextField fieldType="password" fieldName="password" placeholder="Password"
                        onTextChange={this.validatePassword.bind(this)}
                        isFieldRequired={true}/>
        <button className="btn btn-primary" onClick={this.login.bind(this)}>Submit</button>
      </form>
    );
  }

  login (event) {
    event.preventDefault();
    toastr['success']('Welcome ' + this.state.userName);
    timeout(2000);
    browserHistory.push('/');
  }

  componentDidUpdate () {
    console.log(this.state.userName + '-' + this.state.password);
  }
}

module.exports = LoginPage;