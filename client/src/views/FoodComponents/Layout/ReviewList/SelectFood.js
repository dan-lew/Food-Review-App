import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import GridContainer from "components/Grid/GridContainer";
// import GridItem from "components/Grid/GridItem";
import { Link } from "react-router-dom";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
// import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
// import stylesB from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import styles from "assets/jss/material-kit-react/views/components.js";

export default function SelectFood(props) {

  const useStyles = makeStyles(styles);
  // const useStylesB = makeStyles(stylesB);
  // const useStylesT = makeStyles(stylesT);
  const classes = useStyles();


  return (
    <div>
      <Card>
        {" "}
        <CardHeader color="primary">Select food review for : </CardHeader>
        <CardBody>
          <Link
            style={{ color: "#9c27b0" }}
            className={classes.navLink}
            to="/foodRating"
          >
            Lasagne
          </Link>
          <br></br>
          <Link
            style={{ color: "#9c27b0" }}
            className={classes.navLink}
            to="/foodRating"
          >
            Spaghetti
          </Link>
          <br></br>
          <Link
            style={{ color: "#9c27b0" }}
            className={classes.navLink}
            to="/foodRating"
          >
            Pasta
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}
