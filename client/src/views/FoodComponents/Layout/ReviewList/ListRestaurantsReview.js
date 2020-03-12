import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { Link } from "react-router-dom";
import stylesB from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);
const useStylesB = makeStyles(stylesB);

export default function ListRestaurantsReview(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    console.log(classes)
    const { ...rest } = props;
  console.log(props.className)
    return (
        <div className = {props.className}>
            <p> List of Restaurants reviewed</p>
            <Card> <CardHeader color="primary">
                      Select food review for :{" "}
                    </CardHeader>
                    <CardBody>
                      <Link
                        style={{ color: "#9c27b0" }}
                        className={classes.navLink}
                        to="/foodRating"
                      >
                        Restaurant 1
                      </Link>
                      <br></br>
                      <Link
                        style={{ color: "#9c27b0" }}
                        className={classes.navLink}
                        to="/foodRating"
                      >
                        Restaurant 2
                      </Link>
                      <br></br>
                      <Link
                        style={{ color: "#9c27b0" }}
                        className={classes.navLink}
                        to="/foodRating"
                      >
                        Restaurant 3
                      </Link>
                    </CardBody>
                  </Card> 
        </div>
    )
}
