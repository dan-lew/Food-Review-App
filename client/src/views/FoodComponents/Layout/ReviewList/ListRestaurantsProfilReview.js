// ListRestaurantsProfilReview.js

// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import { Switch, Route, Link } from "react-router-dom";
// const useStyles = makeStyles(styles);
import React, { useState, useEffect, useContext } from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import stylesB from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import CardListRestaurant from "./CardListRestaurant";
import RestaurantContext from "../../../../context/restaurants/restaurantContext";
const useStylesB = makeStyles(stylesB);
const useStylesT = makeStyles(stylesT);


const ListRestaurantsProfilReview=(props)=> {

  // Restaurants list
  const restaurantContext = useContext(RestaurantContext);
  const { getCatRestaurant, catrestaurants } = restaurantContext;
  useEffect(()=>{
    getCatRestaurant(props.category)
    console.log('use effect in list restaurants profile review')
  },[])
  console.log(catrestaurants)


  return (
    <div className={props.className}>
      <GridContainer>
        <GridItem>
          <GridContainer>
            {catrestaurants.map(restaurant => (
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <CardListRestaurant
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              </GridItem> //<div>{user.login}</div>
            ))}
           
          </GridContainer>
        </GridItem>
        <GridItem></GridItem>
      </GridContainer>
    </div>
  );
};
export default ListRestaurantsProfilReview;
