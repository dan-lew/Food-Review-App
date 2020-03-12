/*eslint-disable*/
import React ,{Fragment, useContext ,useEffect }from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import AuthContext from '../../../../context/auth/authContext';
console.log(Logo);

const useStylesN = makeStyles(stylesN);
const useStylesT = makeStyles(stylesT);
const useStylesC = makeStyles(stylesC);
const useStylesI = makeStyles(stylesI);
const useStyles = makeStyles(styles);

 const HeaderLinks=(props)=> {

  const classes = useStyles();
  const classesI = useStylesI();

  const authContext=useContext(AuthContext);
  const {isAuthenticated,loadUser,user, logout}=authContext;
  
  useEffect(()=>{
    loadUser();
  },[]);

  const onLogout =() => {
    logout();
  }
  console.log(isAuthenticated);
  const guestLinks = (

    <Fragment>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink}  to="/register">Register </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link className={classes.navLink}  to="/login">Login </Link>
      </ListItem>
    </Fragment>
  )
  const userLinks = (

    <Fragment>
    
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink}  to="/editprofile">Edit Profile </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
          <Link className={classes.navLink} onClick={onLogout} to="/">Logout </Link>
      </ListItem>

     
    </Fragment>
  )
  return (
   <List>
   
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/">Home </Link>
      </ListItem>

      {!isAuthenticated && guestLinks}

      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/about">About </Link>
      </ListItem>
    
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink}  to="/sendMessagePage">Contact Us </Link>
      </ListItem>

      {isAuthenticated && userLinks}
      
    </List>
  );
}
export default HeaderLinks;