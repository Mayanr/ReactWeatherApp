import React, { Fragment } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as  Router, Route, Switch, HashRouter } from 'react-router-dom';
import Main from "./components/Main";
import Weather from "./components/Weather";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Examples from "./components/Examples";


function App() {
  return (
    <Router history ={HashRouter}>
      <Fragment>
      <Navbar />
          <section className = "container">
          <Switch>
            <Route exact path="/" component= {Weather}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/examples" component={Examples}/>
          </Switch>
          </section>
      </Fragment>
      </Router>
  );
}

export default App;
