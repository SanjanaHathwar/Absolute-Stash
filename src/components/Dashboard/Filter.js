import React, { Component } from 'react';
import { Card, CardBody,Table , Button } from 'reactstrap';
import CardTitle from 'reactstrap/lib/CardTitle';
import '../../css/demo.css'

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          suppliers : [],
          suppid : [] 
          
        };
    }
    componentDidMount() {
        this.getsuppliers()
    }

    handleClick = (SID) => {
        console.log(SID)
        let invitedsup = this.state.suppid.concat('org.company.ra.suppliers#'+SID);
        this.setState({suppid:invitedsup});
      }
    getsuppliers =() =>{

        fetch('https://crowd-src.herokuapp.com/upload/newapproved')
        .then(response =>
           response.json()
        )
        .then(data =>{
          this.setState({
            suppliers: data.COMPLETE_DETAILS
    
           
          })
          console.log(this.state.suppliers)
        })
      //console.log(this.state.suppliers)
    }
          
      
  
    render() {
        const {suppliers} = this.state
        return (
        
            <div className="App">
                <br/>
                <Card className="step1 container">
                    <CardTitle className="Text"></CardTitle>
                    <CardBody>
                    <Table className="supplier" dark responsive>
                        <thead>
                        <tr>
                            <th>TITLE</th>
                            <th>EMAIL</th>
                            <th>DOMAIN</th>
                            <th>DEPARTMENT</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            suppliers.map(supp => {
                            const {_id,title,email,domain,category} = supp;
                            return (
                                
                                <tr key={_id}>
                                <td>{title}</td>
                                <td>{email}</td>
                                <td>{domain}</td>
                                <td>{category}</td>   
                                
                                </tr>
                            );
                            })
                        }
                        </tbody>
                        </Table>
                    </CardBody>
                </Card>
                    
            </div>
        
        );
    }
}

export default Filter;