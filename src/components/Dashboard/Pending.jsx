import React, { Component } from 'react';
import { Card, CardBody,Alert , Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CardTitle from 'reactstrap/lib/CardTitle';
import axios from 'axios'
import '../../css/demo.css'

class Pending extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pending : [],
          _id:'',
          title:'',
          category:'',
          email: '',
          git_proj_link:'',
          description:'',
          domain: '',
          modal: false 
          
        };
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        this.getpending()
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    handleClick = (id,t,e,d,c,g,des) => {
        console.log(id)
        this.setState({_id:id})
        this.setState({title:t})
        this.setState({email:e})
        this.setState({domain:d})
        this.setState({category:c})
        this.setState({git_proj_link:g})
        this.setState({description:des})
        this.toggle()
        
      }
    getpending =() =>{

        fetch('https://crowd-src.herokuapp.com/upload/pending')
        .then(response =>
           response.json()
        )
        .then(data =>{
          this.setState({
            pending: data.COMPLETE_DETAILS
    
           
          })
          console.log(this.state.pending)
        })
      //console.log(this.state.pending)
    }
          
    approve = (id,email) => {
        console.log(id,email)
        let url= 'https://crowd-src.herokuapp.com/upload/edit/' +id;
        console.log(url)
        axios.put(url, {
            "email":email,
            "status": "approved"
        })
        .then(res => {
            console.log(res)
            this.alert();
            window.location.reload();
        })

    }

    dissapprove = (id,email) => {
        console.log(id,email)
        let url= 'https://crowd-src.herokuapp.com/upload/delete/' +id;
        console.log(url)
        axios.post(url, {
            "email":email,
        })
        .then(res => {
            console.log(res)
            this.alert();
           
        })

    }
    
    alert=()=> {
        return (
            <Alert color="success">
        This is a success alert — check it out!
      </Alert>
        )
    }
    render() {
        const {pending} = this.state
        return (
        
            <div className="App">
                <br/>
                <Card className="step1 container">
                    <CardTitle className="Text"></CardTitle>
                    <CardBody>
                        {
                             pending.length <= 0 ? 
                            
                             alert("No Pending Projects")
                           
                              :
                              pending.map(supp => {
                              const {_id,title,email,domain,category,git_proj_link,description} = supp;
                              return (
                                <Card className="Innercard" key={_id} onClick={() => this.handleClick(_id,title,email,domain,category,git_proj_link,description)}>
                                <CardBody>
                                    <h5>Title : {title}</h5>
                                    <h5>Email : {email}</h5>
                                    <h5>Department : {category}</h5>
                                    <h5>Domain : {domain} </h5>
                                </CardBody>
                                </Card>
                            );
                            })
                        }
                        
                    </CardBody>
                </Card>


{/********************************************MODAL*****************************************************/}

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
                    <ModalBody>
                        <h7>Department : {this.state.category}</h7><br/><br/>
                        <h7>Domain : {this.state.domain}</h7><br/><br/>
                        <h7>Description : {this.state.description} </h7><br/><br/>
                        <h10 className="Link">Github Link : {this.state.git_proj_link}</h10>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>this.approve(this.state._id,this.state.email)}>Approve</Button>{' '}
                        <Button color="secondary" onClick={this.dissapprove(this.state._id,this.state.email)}>Dissaprove</Button>
                    </ModalFooter>
                </Modal>
                    
            </div>
        
        );
    }
}

export default Pending;