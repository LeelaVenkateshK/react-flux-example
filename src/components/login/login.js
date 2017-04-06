/**
 * Created by WS33 on 3/31/2017.
 */
'use strict';

var React = require('react');

class LoginPage extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <form className="form-horizontal">
        <label>E-mail</label>
        <input className="form-control" type="email" placeholder="Enter E-mail"/>
        <label>Password</label>
        <input className="form-control" type="password" placeholder="Password"/>
        <button className="btn-primary">Submit</button>
      </form>
    );
  }

}
module.exports = LoginPage;