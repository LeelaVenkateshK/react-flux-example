/**
 * Created by WS33 on 3/24/2017.
 */
var React = require('react');
var {hashHistory, browserHistory, Route, Router, Switch} = require('react-router');

var App = require('./../app');
var PageNotFound = require('../notFound');
var HomePage = require('./../homePage');
var AuthorPage = require('./../authors/authorPage');
var AboutPage = require('./../about/aboutPage');
var LoginPage = require('./../login/login');
var ManagerAuthorPage = require('../authors/manageAuthorPage');

var Routes = (
  <Router history={browserHistory}>

    <Route name="default" component={App}>
      <Route path="/" component={HomePage}/>
      <Route path="authors" component={AuthorPage}/>
      <Route path="author" component={ManagerAuthorPage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="login" component={LoginPage}/>
    </Route>
    <Route name="notFound" path="*" component={PageNotFound}/>
  </Router>
);
module.exports = Routes;