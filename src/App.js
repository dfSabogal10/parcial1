import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Busqueda from './Modules/busqueda'

class App extends Component {
  render() {
    return (
      <div>
        <h1> Flickr Rainbow </h1>
        <p> Search for something on Flickr ande we will get you a Rainbow for it </p>
        <Busqueda/>
      </div>
    );
  }
}

export default App;
