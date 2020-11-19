import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateMessagePage from './pages/CreateMessagePage';
import MessagePage from './pages/MessagePage';
import NotFound from './pages/ErrorsPages/NotFound';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CreateMessagePage} />
        <Route exact path="/messages/:uuid" component={MessagePage}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
