/**
 * Created by WS33 on 3/31/2017.
 */
'use strict';

var React = require('react');

class LoginPage extends React.Component {
  render () {
    return (
      <form className="form-group">
        <label>E-mail</label>
        <input className="form-horizontal" type="email" placeholder="Enter E-mail" />
      </form>
    );
  }

}
module.exports = LoginPage;