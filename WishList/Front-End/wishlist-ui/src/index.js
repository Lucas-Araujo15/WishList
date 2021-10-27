import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Desejos from './pages/desejos/Desejos.jsx'
import NotFound from './pages/notFound/NotFound.jsx'

import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Desejos} />
        <Route path="/notfound" component={NotFound} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

reportWebVitals();
