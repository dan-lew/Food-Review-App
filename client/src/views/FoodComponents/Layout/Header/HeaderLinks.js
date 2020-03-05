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
import Logo from 'assets/img/Logo-FR-shadow.png';
import stylesC from "assets/jss/material-kit-react/views/components.js";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js"
import stylesN from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

console.log(Logo);

const useStylesN = makeStyles(stylesN);
const useStylesT = makeStyles(stylesT);
const useStylesC = makeStyles(stylesC);
const useStylesI = makeStyles(stylesI);
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  console.log(Logo)
  const classes = useStyles();
  const classesI = useStylesI();
  return (
   <List>
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
