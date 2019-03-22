import React, { Component } from 'react'
import Chart from './Chart';



class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="col">
          <div className="row s6 m3">
         
           
          </div>
          <div className="col s12 m5 offset-m1">
            <Chart/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard