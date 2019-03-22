import React, { Component } from 'react';
import '../../css/demo.css'
import CanvasJSReact from '../../canvasjs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
class Chart extends Component {
    state = {
            appcount:'',
            pendcount: ''
        }
    
    componentDidMount = () => {
        fetch('https://crowd-src.herokuapp.com/upload/newapproved')
        .then(response =>
           response.json()
        )
        .then(data =>{
          this.setState({
            appcount: data.TOTAL_NO_OF_PROJECTS_UPLOADED_YET_TO_BE_APPROVED
          })
          console.log(this.state.appcount)
        })
        fetch('https://crowd-src.herokuapp.com/upload/pending')
        .then(response =>
           response.json()
        )
        .then(data =>{
          this.setState({
            pendcount: data.TOTAL_NO_OF_PROJECTS_UPLOADED_YET_TO_BE_APPROVED
          })
          console.log(this.state.appcount)
        })
    }
	render() {
		const options = {
			theme: "light",
			animationEnabled: true,
           
			exportEnabled: true,
			
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y} Projects</strong>",
				indexLabel: "{y}",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: this.state.appcount, label: "Approved Projects" , color :'Indigo' },
					{ y: this.state.pendcount, label: "Pending Projects" ,color :'RebeccaPurple' },
					
				]
			}]
        }
       
		
		return (
		<div>
			
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default Chart;