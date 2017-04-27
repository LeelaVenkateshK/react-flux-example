'use strict';
import React from 'react';
import AuthorActions from './../../actions/author-actions';

class Home extends React.Component {
  constructor () {
    super();
    this.state = {json: ''};
  }

  componentDidMount () {
    console.log('in componentDidMount');
  }

  componentWillUnmount () {

  }

  componentWillMount () {
    this.setState({json: JSON.stringify(AuthorActions.testConnection())});
    console.log(this.state.json);
  }

  render () {
    console.log(this.state.json);
    return (
      <div>
        <div className="jumbotron">
          <h1>
            Administration
          </h1>
        </div>
        <p>This will override the Actual "Hello Kris" that was supposed to be
          displayed</p>
        <p>{this.state.json}</p>
      </div>
    );
  }
}

export default Home;
