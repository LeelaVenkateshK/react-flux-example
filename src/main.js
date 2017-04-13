'use strict';
let ReactDOM = require('react-dom');
let Routes = require('./components/routes/routes');
let AuthorStore = require('./stores/authorStore');

AuthorStore.getAllAuthors();
ReactDOM.render(Routes, document.getElementById('app'));