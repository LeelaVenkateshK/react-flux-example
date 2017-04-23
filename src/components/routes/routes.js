/**
 * Created by WS33 on 3/24/2017.
 */
let React = require('react');
let {browserHistory, Route, Router} = require('react-router');

let App = require('./../app');
let PageNotFound = require('../error-page/notFound');
let HomePage = require('../home-page/homePage');
let AuthorPage = require('./../authors/authorPage');
let AboutPage = require('../about-page/aboutPage');
let LoginPage = require('../login-page/loginPage');
let ManagerAuthorPage = require('../authors/manageAuthorPage');
let UserRegistrationPage = require('../registration-page/registrationPage');
let TermsAndConditionsPage = require('../registration-page/TermsAndConditions');

let Routes = (
  <Router history={browserHistory}>

    <Route name="default" component={App}>
      <Route path="/" component={HomePage}/>
      <Route path="authors" component={AuthorPage}/>
      <Route path="author" component={ManagerAuthorPage}/>
      <Route name="manageAuthor" path="author/:id" component={ManagerAuthorPage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="login" component={LoginPage}/>
      <Route path="register" component={UserRegistrationPage}/>
      <Route path="T&C" component={TermsAndConditionsPage}/>
      <Route path="/*" component={PageNotFound}/>
    </Route>

  </Router>
);
module.exports = Routes;