'use strict';
import ReactDOM from 'react-dom';
import Routes from './components/routes/routes';
import AuthorActions from './actions/authorActions';

AuthorActions.testConnection();
ReactDOM.render(Routes, document.getElementById('app'));