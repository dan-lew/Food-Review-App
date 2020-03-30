// ListSelectFoodReview.js

import React, { useState, useEffect, Fragment,useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import stylesB from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CardListRestaurant from "./CardListRestaurant";
import RestaurantContext from "../../../../context/restaurants/restaurantContext";

 const ListSelectFoodReview=props=> {
  const restaurantContext = useContext(RestaurantContext);
  const {getCatRestaurant, catrestaurants,searchFood } = restaurantContext;

  const useStyles = makeStyles(styles);
  const useStylesB = makeStyles(stylesB);
  const useStylesI = makeStyles(stylesI);
  const useStylesT = makeStyles(stylesT);
  const classes = useStyles();
  const classesI = useStylesI();
  const classesT = useStylesT();

  const ListFoodStyle = {
    show: {
      display: "block"
    },
    notShow: {
      display: "none"
    }
  };

  const [classList, setClassList] = React.useState("display");
  const handleShow = () => {
    if (classList === "block") {
      setClassList("display");
    } else {
      setClassList("block");
    }
  };


  useEffect(() => {
    searchFood(props.name,props.city);
  }, []);
  console.log(catrestaurants);




  let starRat = props => {
    if (props.length === 0) {
      //for (i=0;i<5;i++){
      return (
        <Fragment>
          <StarBorderIcon />
        </Fragment>
      );
      // <StarBorderIcon/>
      //}
    } else {
      if (props.length > 0) {
        //  for (i=0;i<props.length;i++){
        //   <StarIcon />
        //}
      }
    }
  };


  return (
    <div>
      {/* Grid for shows for restaurants */}
      <GridContainer>
        <GridItem>
          <GridContainer>
            {catrestaurants.map(restaurant => (
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <CardListRestaurant
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              </GridItem> 
            ))}
           
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default  ListSelectFoodReview