/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const HeaderLinksUser=(props)=>{
  const classes = useStyles();
  return (

    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Link className={classes.navLink} to="/home">Home </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link className={classes.navLink} to="/user-profile">Profile </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link className={classes.navLink}  to="/review-page">User Reviews </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link className={classes.navLink}  to="/sendMessagePage">Contact Us </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link className={classes.navLink}  to="/logout">Logout </Link>
      </ListItem>

    </List>
  );
}
export default HeaderLinksUser;
