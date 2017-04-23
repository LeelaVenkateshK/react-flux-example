'use strict';
let ReactDOM = require('react-dom');
let Routes = require('./components/routes/routes');
let AuthorActions = require('./actions/authorActions');

AuthorActions.testConnection();
ReactDOM.render(Routes, document.getElementById('app'));