'use strict';
import React from 'react';

import AuthorActions from './../../actions/author-actions';
import AuthorStore from './../../stores/author-store';
import Clock from './clock';
class Home extends React.Component {
  constructor () {
    super();
    this.state = {json: '',date:new Date()};
    this.timerId;
  }

  componentDidMount () {
  }

  componentWillUnmount () {
    AuthorStore.removeChangeListener(this.getProductData);
  }

  componentWillMount () {
    AuthorStore.addChangeListener(this.getProductData);
  }

  getProductData(){
    this.setState({json: JSON.stringify(AuthorActions.testConnection())});
  }
  render () {
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
        <Clock />
      </div>
    );
  }
}

export default Home;
