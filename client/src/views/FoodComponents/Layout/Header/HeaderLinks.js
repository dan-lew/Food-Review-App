
import React, { Fragment, useContext, useEffect } from "react";
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

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

import stylesC from "assets/jss/material-kit-react/views/components.js";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import stylesN from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import AuthContext from "../../../../context/auth/authContext";

const useStylesN = makeStyles(stylesN);
const useStylesT = makeStyles(stylesT);
const useStylesC = makeStyles(stylesC);
const useStylesI = makeStyles(stylesI);
const useStyles = makeStyles(styles);

const HeaderLinks = props => {
  const classes = useStyles();
  const classesI = useStylesI();

  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser, user, logout } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  const onLogout = () => {
    logout();
  };
  console.log(isAuthenticated);
  const guestLinks = (
    <Fragment>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/register">
          Register
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/login">
          Login
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/sendMessagePage">
          Contact Us
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/about">About </Link>
      </ListItem>

  
    </Fragment>
  );


  
  const userLinks = (
    <Fragment>
      {/* <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/editprofile">
          Edit Profile
        </Link>
      </ListItem> */}

      <ListItem className={classes.listItem}>
      <Link className={classes.navLink} to="/welcome-user">Welcome User </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link className={classes.navLink} to="/user-profile"> Profile </Link>
      </ListItem>


      <ListItem className={classes.listItem}>
      <Link className={classes.navLink}  to="/restaurantsReview">Food Reviews </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link className={classes.navLink}  to="/review-page">Add Review </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/sendMessagePage">
          Contact Us
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/about">About </Link>
      </ListItem>

     
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} onClick={onLogout} to="/">
          Logout
        </Link>

      </ListItem>
    </Fragment>
  );
  return (
    <List>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/">
          Home
        </Link>
      </ListItem>

      {!isAuthenticated && guestLinks}
    

      {isAuthenticated && userLinks}
    </List>
  );
};
export default HeaderLinks;
