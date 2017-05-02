'use strict';
import Dispatcher from '../dispatcher/dispatcher';
import ActionTypes from './constants/action-types';
import WebServices from './../web-services/web-services';

let ProductActions = {
  createProduct(product) {
    // TODO create a product via a API call
    WebServices.createDocument(product);
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_PRODUCT,
      product: product
    });
  },
  deleteProduct(productId) {
    // TODO Delete the product via API call
    WebServices.deleteDocument(productId);
    Dispatcher.dispatch({
      actionType:ActionTypes.DELETE_PRODUCT
    });
  }
};
export default ProductActions;
