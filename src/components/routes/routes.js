/**
 * Created by WS33 on 3/24/2017.
 */
import React from 'react';
import {browserHistory, Route, Router} from 'react-router';

import App from './../app';
import PageNotFound from '../error-page/notFound';
import HomePage from '../home-page/homePage';
// import AuthorPage from './../authors/authorPage';
import AboutPage from '../about-page/aboutPage';
import LoginPage from '../login-page/loginPage';
// import ManagerAuthorPage from '../authors/manageAuthorPage';
import UserRegistrationPage from '../registration-page/registrationPage';
import TermsAndConditionsPage from '../registration-page/TermsAndConditions';

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