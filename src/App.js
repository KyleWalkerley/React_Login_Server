import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Products from './Products.js';
import JumboTronComponent from './JumboTronComponent.js';
import UserForm from './UserForm.js';
import GitHub from './GitHub.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component { 
  render() { 
    return (
      <div>
        <GitHub /> 
      </div>
    );
  }
}

export default App;
