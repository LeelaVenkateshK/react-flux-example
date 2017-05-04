'use strict';
import React from 'react';
import Clock from './clock';
import ProductActions from './../../actions/product-actions';
import ProductStore from '../../stores/product-store';
class Home extends React.Component {
  constructor() {
    super();
    this.state = { json: ProductActions.getAllProducts(), date: new Date() };
    this.timerId;
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._getProductData);
  }

  componentWillMount() {
    ProductStore.addChangeListener(this._getProductData);
    this.setState({ json: ProductActions.getAllProducts });
    console.log('json :: ' + this.state.json);
  }

  _getProductData() {
    this.setState({ json: JSON.stringify(ProductActions.getAllProducts()) });
  }

  render() {
    console.log('json' + this.state.json);
    return (
      <div>
        <div className="jumbotron">
          <h1>Welcome!</h1>
        </div>
        <p>{this.state.json}</p>
        <Clock />
      </div>
    );
  }
}

export default Home;
