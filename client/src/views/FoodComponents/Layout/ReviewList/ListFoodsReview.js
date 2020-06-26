import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";

import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader.js";

export default function ListFoodsReview(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    //console.log("props.foodReview: ",props.foodReview)
    var getFoodReview;
    if (props.foodReview != null) {
      getFoodReview = props.foodReview.map((item) => {
        //console.log(item.nameOfDish);
        return item.nameOfDish;
      });
    }
  //console.log(getFoodReview);
    return (
      <div className={props.className}>
        <Card>
          <CardHeader color="primary">Select foods: </CardHeader>
          <CardBody>
            {getFoodReview!=null && getFoodReview.map((food) => (
                  <h4 style={{ color: "#9c27b0" }}>{food}</h4>
            ))}
          </CardBody>
        </Card>
      </div>
    );
  }
