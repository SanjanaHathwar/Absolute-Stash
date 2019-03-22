
    import CanvasJSReact from '../../canvasjs/canvasjs.react';
    var React = require('react');
    var Component = React.Component;
   
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
     
    class Charts2 extends Component {
        state={
            iot:'',
            erp:'',
            spm: '',
            ai:''
        }	
        componentDidMount = () => {
        
            fetch('https://crowd-src.herokuapp.com/upload/appdomain/Internet of Things(IoT)')
            .then(response =>
                response.json()
             )
             .then(data =>{
               this.setState({
                 iot: data.TOTAL_NO_OF_PROJECTS_UPLOADED_YET_TO_BE_APPROVED_OF_DOMAIN
                })
                console.log(this.state.iot)
            })
            fetch('https://crowd-src.herokuapp.com/upload/appdomain/Enterprise Resource Planning (ERP)')
            .then(response =>
                response.json()
             )
             .then(data =>{
               this.setState({
                 erp: data.TOTAL_NO_OF_PROJECTS_UPLOADED_YET_TO_BE_APPROVED_OF_DOMAIN
                })
            })
            fetch('https://crowd-src.herokuapp.com/upload/appdomain/Software Project Management(SPM)')
            .then(response =>
                response.json()
             )
             .then(data =>{
               this.setState({
                 spm: data.TOTAL_NO_OF_PROJECTS_UPLOADED_YET_TO_BE_APPROVED_OF_DOMAIN
                })
            })
            fetch('https://crowd-src.herokuapp.com/upload/appdomain/Artificial Intelligence (AI)')
            .then(response =>
                response.json()
             )
             .then(data =>{
               this.setState({
                 ai: data.TOTAL_NO_OF_PROJECTS_UPLOADED_YET_TO_BE_APPROVED_OF_DOMAIN
                })
            })
        }
    	render() {
    		const options = {
    			animationEnabled: true,
    			exportEnabled: true,
    			theme: "theme2", //"light1", "dark1", "dark2"
    			toolTip: {
                    borderThickness: 0,
                    cornerRadius: 0
                },
    			data: [{
    				type: "column", //change type to bar, line, area, pie, etc
    				//indexLabel: "{y}", //Shows y value on all Data Points
    				indexLabelFontColor: "#5A5757",
    				indexLabelPlacement: "outside",
    				dataPoints: [
    					
    					{ label: "SPM", y: this.state.spm ,color:"Navy"},
    					{ label: "AI", y: this.state.ai ,color:"RoyalBlue"},
    					{ label: "ERP", y: this.state.erp ,color:"DeepSkyBlue"},
    					{ label: "IOT", y: this.state.iot , color: "PowderBlue" },
    					
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
export default Charts2                       