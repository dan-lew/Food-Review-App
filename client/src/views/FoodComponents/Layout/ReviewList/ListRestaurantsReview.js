import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { Link } from "react-router-dom";


export default function ListRestaurantsReview(props) {

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  var getRestaurantName;
  if (props.restaurantName != null) {
    getRestaurantName = props.restaurantName.map((item) => {
      console.log(item.restaurantName);
      return {name: item.restaurantName, city: item.city};
    });
  }

  return (
    <div className={props.className}>
      <Card>
        <CardHeader color="primary">Select restaurants: </CardHeader>
        <CardBody>
          {getRestaurantName!=null && getRestaurantName.map((restaurant) => (
            <Link
              className={classes.navLink}
              to={{ pathname: "/restaurantsReview", state: {name: restaurant.name, city: restaurant.city} }}
            >
              <h4 style={{ color: "#9c27b0" }}>{restaurant.name}</h4>
            </Link>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
