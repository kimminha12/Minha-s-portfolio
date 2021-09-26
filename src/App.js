import logo from './logo.svg';
import './App.css';
import Loading from "./Loading";
import React, {Component} from 'react';
import styled from "styled-components";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <Navbar />
      <Switch>
        <Route path=""/>
        <Route path="" />
        <Route path="" />
        <Route path="" />
      </Switch>
    </Router>
    )
  }
}

export default App;
