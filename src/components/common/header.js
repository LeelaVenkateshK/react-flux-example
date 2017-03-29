'use strict';
var React = require('react');
class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img src="images/home-icon.png" width={30} height={30}/>
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/#/">Home</a></li>
                        <li><a href="/#/authors">Authors</a></li>
                        <li><a href="/#/about">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = Header;