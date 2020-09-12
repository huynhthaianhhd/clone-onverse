import React, { Component } from 'react'
import './App.css';
import HomePage from './component/HomePage/HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/:page" exact component={HomePage}>
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
