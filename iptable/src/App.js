import React, { Component } from 'react';
// import logo from './logo.svg';

import  NavbarContainer from './containers/NavbarContainer';
import  MainContainer  from './containers/MainContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        <MainContainer />
      </div>
    );
  }
}

export default App;

