import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App.js';
import Styles from './pages/Styles.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
    <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/game" component={App} />
        <Route exact path="/styles" component={Styles} />
        <Route exact path="/" component={App} />
    </Router>
), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
