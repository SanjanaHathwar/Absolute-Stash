import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pending from './components/Dashboard/Pending';
import Approved from './components/Dashboard/Approved'
import Navbar from './components/Layout/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar/>
        <Switch>
        <Route path='/Approved' component={Approved}/>
          <Route path='/Pending' component={Pending}/>

        </Switch>
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
