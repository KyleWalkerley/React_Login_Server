import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Products from './Products.js';
import JumboTronComponent from './JumboTronComponent.js';


class App extends Component {
  render() { 
    return (
      <div>
        <JumboTronComponent /> 
      </div>
    );
  }
}


export default App;
