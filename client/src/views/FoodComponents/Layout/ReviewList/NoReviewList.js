import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/components";

export default function NoReviewList() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem>
          <Card>
            <CardBody style={{ textAlign: "left" }}>

              <h3>There is no reviews for this restaurant</h3>
              <Link
                style={{ color: "#9c27b0" }}
                className={classes.navLink}
                to="/review-page"
              >
                Add a review
              </Link>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
