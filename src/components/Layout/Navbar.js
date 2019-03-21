import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import compose from 'recompose/compose';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import '../../css/demo.css'


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: drawerWidth,
    backgroundColor:" #1c2833 "
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"   #ccd1d1   ",
    opacity : "100%"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});



class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal2: false,
      category : '',
      allcat : []
    };

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  toggle2() {
    this.setState(prevState => ({
      modal2: !prevState.modal2
    }));
  }
//*************************ALL FUNCTIONS************************************ */
  showapproved = () => {
    this.props.history.push("/Approved");  
  }
  showpending = () => {
    this.props.history.push("/Pending");  
  }
  showhome = () => {
    this.props.history.push("/Home");
  }
/*********************************ADD DEPARTMENT************************************************** */
  addDept= (category) => {
    fetch('https://crowd-src.herokuapp.com/category')
        .then(response =>
           response.json()
        )
        .then(data =>{
          this.setState({
            allcat: data.CATEGORY_DETAILS
    
           
          })
          console.log(this.state.allcat)
        })
        console.log(category)

    if(this.state.allcat.includes(category)) {
      alert("Department already present")
    } 
    else 
    {
      axios.post('https://crowd-src.herokuapp.com/category',{
       "category" : category
      })
      .then(res => {console.log(res)
      alert("Department Added")})
      this.toggle()
    }
  }
  /*************************************************ADD DOMAIN****************************************************** */
  addDom= (domain) => {
    axios.post('https://crowd-src.herokuapp.com/domain',{
       "domain" : domain
      })
      .then(res => {console.log(res)
      alert("Domain Added")})
      this.toggle2()
  }
/*********************************SET STATE FOR DEPARTMENT******************************************************** */
  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }
/******************************************************************************** */
  render () {

    
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
            Absolute Stash
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} /><br/>
          <Divider />
          
          <List><br/>
          <Divider />
              <ListItem button  onClick={this.showhome}>
                <ListItemIcon></ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>
              
              <ListItem button onClick={this.showapproved}>
                <ListItemIcon></ListItemIcon>
                <ListItemText>Approved Projects</ListItemText>
              </ListItem>
              <ListItem button onClick={this.showpending}>
                <ListItemIcon></ListItemIcon>
                <ListItemText>Pending Projects</ListItemText>
              </ListItem>
              <ListItem button onClick={this.toggle}>
                <ListItemIcon></ListItemIcon>
                <ListItemText>Add Department</ListItemText>
              </ListItem>
              <ListItem button onClick={this.toggle2}>
                <ListItemIcon></ListItemIcon>
                <ListItemText>Add Domaint</ListItemText>
              </ListItem>
              
      
          </List>
          
          <List>
          
          </List>
        </Drawer>
        <main className={classes.content}>
        <Modal className="modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Department</ModalHeader>
            <ModalBody>
              
              <Form>
                <FormGroup>
                  <Label for="dept">Enter Department</Label>
                  <Input type="text" name="category" id="dept" placeholder="Enter Department" onChange={this.handleChange} />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => this.addDept(this.state.category)}>ADD</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>CANCEL</Button>
            </ModalFooter>
        </Modal>
        
{/*******************************MODAL FOR DOMAIN*********************************************************** */}
        <Modal className="modal" isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
          <ModalHeader toggle={this.toggle2}>Add Domain</ModalHeader>
            <ModalBody>
              
              <Form>
                <FormGroup>
                  <Label for="dom">Enter Domain</Label>
                  <Input type="text" name="domain" id="dom" placeholder="Enter Domain" onChange={this.handleChange} />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => this.addDom(this.state.domain)}>ADD</Button>{' '}
              <Button color="secondary" onClick={this.toggle2}>CANCEL</Button>
            </ModalFooter>
        </Modal>
        </main>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  withStyles(styles),
)(Navbar);