import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pending from './components/Dashboard/Pending';
import Navbar from './components/Layout/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Pending/>
      </div>
    );
  }
}

export default App;
