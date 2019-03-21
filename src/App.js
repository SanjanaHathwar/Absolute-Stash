import React, { Component } from 'react';

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pending from './components/Dashboard/Pending';
import Approved from './components/Dashboard/Approved'
import Navbar from './components/Layout/Navbar';
import Home from './components/Dashboard/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/Approved' component={Approved}/>
          <Route path='/Pending' component={Pending}/>
          <Route path='/Pending' component={Home}/>
        </Switch>
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
