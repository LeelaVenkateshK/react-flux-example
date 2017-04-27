/**
 * Created by WS33 on 3/24/2017.
 */
import React from 'react';
import {browserHistory, Route, Router} from 'react-router';

import App from './../app';
import PageNotFound from '../error-page/not-found';
import HomePage from '../home-page/home-page';
// import AuthorPage from './../authors/author-page';
import AboutPage from '../about-page/about-page';
import LoginPage from '../login-page/login-page';
// import ManagerAuthorPage from '../authors/manage-author-page';
import UserRegistrationPage from '../registration-page/registration-page';
import TermsAndConditionsPage from '../registration-page/terms-and-conditions';

let Routes = (
  <Router history={browserHistory}>

    <Route name="default" component={App}>
      <Route path="/" component={HomePage}/>
      {/*<Route path="authors" component={AuthorPage}/>*/}
      {/*<Route path="author" component={ManagerAuthorPage}/>*/}
      {/*<Route name="manageAuthor" path="author/:id" component={ManagerAuthorPage}/>*/}
      <Route path="about" component={AboutPage}/>
      <Route path="login" component={LoginPage}/>
      <Route path="register" component={UserRegistrationPage}/>
      <Route path="T&C" component={TermsAndConditionsPage}/>
      <Route path="/*" component={PageNotFound}/>
    </Route>

  </Router>
);
export default Routes;
