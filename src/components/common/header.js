'use strict';
var React = require('react');
var {Link,IndexLink }= require('react-router');


class Header extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="images/home-icon.png" width={30} height={30}/>
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="authors">Authors</Link></li>
            <li><Link to="about">About</Link></li>
            {/*<li><Link to="login">Log In</Link></li>*/}
            <li><Link to="author">Add User</Link></li>
          </ul>
        </div>
      </nav>
    );``
  }
}

module.exports = Header;