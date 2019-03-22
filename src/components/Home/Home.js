import React, { Component } from 'react'
import Chart from './Chart';
import Charts2 from './Charts2';
import{Col} from 'reactstrap'
import Cards from './Cards';
import '../../css/demo.css'


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="col">
          <div className="row s6 m3">
           <Cards/>
          </div>
        </div>
        <div class="row m-b-2">
				<div class="col-lg-2">
					<div>
					
					</div>
				</div>
				<div class="col-lg-5">
					<div class="card card-block">
						
						<div ><Chart/></div>
					</div>
				</div>
				<div class="col-lg-5">
					<div class="card card-block">
						
						<div><Charts2/></div>
					</div>
				</div>
			</div>
    </div>
    )
  }
}

export default Dashboard