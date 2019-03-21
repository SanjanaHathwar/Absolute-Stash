import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import {withRouter} from 'react-router-dom'
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
  showapproved = () => {
    this.props.history.push("/Approved");  
  }
  showpending = () => {
    this.props.history.push("/Pending");  
  }
  showhome = () => {
    this.props.history.push("/Home");
  }
    
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
              <ListItem button >
                <ListItemIcon></ListItemIcon>
                <ListItemText>Add Department</ListItemText>
              </ListItem>
              <ListItem button >
                <ListItemIcon></ListItemIcon>
                <ListItemText>Add Domaint</ListItemText>
              </ListItem>
              
      
          </List>
          
          <List>
          
          </List>
        </Drawer>
        <main className={classes.content}>
          
        
        </main>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const c1 = withStyles(styles)(Navbar);
const c2 = withRouter(Navbar);

export default compose(
  withRouter,
  withStyles(styles),
)(Navbar);