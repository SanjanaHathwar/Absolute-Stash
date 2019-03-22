import React , {Component} from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import {withRouter} from 'react-router-dom'
import '../../css/demo.css'

class Cards extends Component {
    handleClick = () => {
        this.props.history.push("/Step1");  
    }
    render() {
        return (
              //LINK, LINK-SUMMARY IS CSS CLASS
            <div>
          <br/><br/>
            <Card className="Link z-depth-2">
                    <CardBody className="card-content grey-text text-darken-2">
                        
                    </CardBody>    
                
            </Card>
            </div>
        )
    }
}
export default withRouter(Cards);