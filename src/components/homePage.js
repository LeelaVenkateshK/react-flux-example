'use strict';
var React = require('react');
var Header = require('./common/header');

class Home extends React.Component {
    render() {
        return (
          <div>
            <Header />
            <div>
                <div className="jumbotron">
                    <h1>
                        Administration
                    </h1>
                </div>
                <p>This will override the Actual "Hello Kris" that was supposed to be displayed</p>
            </div>
          </div>
        );
    }
}

module.exports = Home;