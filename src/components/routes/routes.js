/**
 * Created by WS33 on 3/24/2017.
 */
var React = require('react');
var {hashHistory, browserHistory, Route, Router} = require('react-router');

var App = require('./../app');
var PageNotFound = require('../notFound');
var HomePage = require('./../homePage');
var AuthorPage = require('./../authors/authorPage');
var AboutPage = require('./../about/aboutPage');
var LoginPage = require('./../login/loginPage');
var ManagerAuthorPage = require('../authors/manageAuthorPage');
let RegistrationPage = require('./../register/registrationPage');

var Routes = (
  <Router history={hashHistory}>
    {/**
     * TODO Find a way to add browserHistory as it has some advantages.
     * TODO Find the advantages too.
     */

      /**Commented above line as it doesn't the page directly on refresh.
       * Need to do some config which can be found in react-training-lessons
       * on github in following link : https://github.com/reactjs/react-router-tutorial
       */
      /*<Router history={browserHistory}>*/
    }
    <Route name="default" component={App}>
      <Route path="/" component={HomePage}/>
      <Route path="authors" component={AuthorPage}/>
      <Route path="author" component={ManagerAuthorPage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="login" component={LoginPage}/>
      <Route path="register" component={RegistrationPage}/>
    </Route>
    <Route path="/404" component={PageNotFound}/>
    <Route name="notFound" path="*" to="/404"/>
  </Router>
);

module.exports = Routes;