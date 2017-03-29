/**
 * Created by WS33 on 3/24/2017.
 */
var React = require('react');
var {hashHistory, Route, Router} = require('react-router');
var HomePage = require('./../homePage');
var AuthorPage = require('./../authors/authorPage');
var AboutPage = require('./../about/aboutPage');

var Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={HomePage}/>
    <Route path='/authors' component={AuthorPage}>
      <Route path='/authors/:author' component={AuthorPage}/>
    </Route>
    <Route path='/about' component={AboutPage}/>
  </Router>
);
module.exports = Routes;