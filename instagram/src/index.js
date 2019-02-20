import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Login from './components/LoginPage/Login';
import * as serviceWorker from './components/serviceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
