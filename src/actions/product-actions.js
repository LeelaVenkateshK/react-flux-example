'use strict';
import logger from 'react-logger';

import Dispatcher from '../dispatcher/dispatcher';
import ActionTypes from './../constants/action-types';
import WebServices from './../web-services/web-services';
import ServerEndpoints from './../constants/service-end-points';

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
      actionType: ActionTypes.DELETE_PRODUCT
    });
  },
  getAllProducts() {
    let promiseObject = WebServices.getUsingAxios(ServerEndpoints.PRODUCTS);
    promiseObject.then(success => {
      return success.data;
    }).catch(error => {
      logger.error("Encountered error while resolving promise ::: " + error);
    });
  }
};
export default ProductActions;
