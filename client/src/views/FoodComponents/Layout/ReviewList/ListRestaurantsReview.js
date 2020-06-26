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

  var getRestaurantName = [];
  let repeated = false;
  let acum = 0;
  let ind = 0;
  if (props.restaurantName != null) {
    props.restaurantName.forEach((item) => {
      //console.log(item.restaurantName);
      if(getRestaurantName.length){
        while(!repeated && ind < getRestaurantName.length){
          console.log(getRestaurantName[ind].name)
          if(getRestaurantName[ind].name === item.restaurantName){
            repeated = true
          }
          ind = ind + 1;
        }
      }

      if(!repeated){
        props.restaurantName.forEach((currentValue) =>{
          if(item.restaurantName === currentValue.restaurantName){
            return acum = acum + 1;
          }
        })
        getRestaurantName.push({name: item.restaurantName, city: item.city, visits: acum});
        
      }
      repeated = false;
      acum = 0;
      ind = 0;
      
    });
  }

  console.log('HEEEEEEREEEEE',getRestaurantName)

  return (
    <div className={props.className}>
      <Card>
        <CardHeader color="primary">Restaurants you reviewed: </CardHeader>
        <CardBody>
          {getRestaurantName!=null && getRestaurantName.map((restaurant) => (
            <Link
              className={classes.navLink}
              to={{ pathname: "/restaurantsReview", state: {name: restaurant.name, city: restaurant.city} }}
            >
              <h4 style={{ color: "#9c27b0" }}>{restaurant.name} ({restaurant.visits})</h4>
            </Link>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
