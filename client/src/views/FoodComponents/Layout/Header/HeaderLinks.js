/*eslint-disable*/
import React from "react";
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

const useStyles = makeStyles(styles);

 const HeaderLinks=(props)=> {

  const classes = useStyles();
  // const classesI = useStylesI();
  return (
   <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Link className={classes.navLink} to="/home">Home </Link>
       
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link className={classes.navLink} to="/about">About </Link>
       
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link className={classes.navLink}  to="/register">Register </Link>
 
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link className={classes.navLink}  to="/login">Login </Link>
      </ListItem>
    </List>
  );
}
export default HeaderLinks;