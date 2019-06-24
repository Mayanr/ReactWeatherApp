import React, { Fragment } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { IndexRoute  } from 'react-router';
import { BrowserRouter as  Router, Route, Switch, HashRouter } from 'react-router-dom';
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
    <Router history ={HashRouter}>
      <Fragment>
        <Route path="/" component= {Main}>
        
        </Route>
      </Fragment>
      </Router>
    </div>
  );
}

export default App;
