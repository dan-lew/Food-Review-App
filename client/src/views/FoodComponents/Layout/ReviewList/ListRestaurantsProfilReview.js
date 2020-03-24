// ListRestaurantsProfilReview.js

// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import ListSelectFoodReview from "./ListSelectFoodReview";
// import { Switch, Route, Link } from "react-router-dom";
// const useStyles = makeStyles(styles);
import React, { useState, useEffect ,useContext} from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import stylesB from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import CardListRestaurant from './CardListRestaurant'
// import update from 'immutability-helper';

import RestaurantContext from '../../../../context/restaurants/restaurantContext'
import ListRestaurantsReview from './ListRestaurantsReview'
const useStylesB = makeStyles(stylesB);
const useStylesT = makeStyles(stylesT);

const ListFoodStyle = {
  show: {
    display: "block"
  },
  notShow: {
    display: "none"
  }
};

const ListRestaurantsProfilReview=(props)=> {
  const useStylesListF = makeStyles(ListFoodStyle);
  const classesListF = useStylesListF();
  const useStyles = makeStyles(styles);
  const classesB = useStylesB();
  const classesT = useStylesT();

// Restaurants list
  const restaurantContext = useContext(RestaurantContext);
  const { restaurants,filtered,error,getCatRestaurant, catrestaurants } = restaurantContext;
  useEffect(()=>{
    getCatRestaurant(props.category)
    console.log('use effect in list restaurants profile review')
  },[])
  console.log(catrestaurants)

   // let restaurantsState = {
  //   id: "1",
  //   url: "",
  //   img: { src: "https://via.placeholder.com/180x130" },
  //   name: "Restaurant name",
  //   rating: "",
  //   food:"",
  //   isLoading: "false",
  //   category: "",
  //   count: 0
  // };

  // console.log("state ", restaurantsState.count);
  // console.log(restaurantsState.img.src);
  // console.log(restaurantsState.food);
//   const [restaurants, setRestaurants] = useState(restaurantsState.count);
//   const { id, category, count, url, img, food, name, rating } = props;

//  //food set 


//   const [classList, setClassList] = React.useState("display");
//   const handleShow = () => {
//     if (classList === "block") {
//       setClassList("display");
//     } else {
//       setClassList("block");
//     }
//   };

  return (
    <div className={props.className}>
      <GridContainer>
        <GridItem>
          {catrestaurants.map(restaurant=>(
            <CardListRestaurant key={restaurant.id} restaurant={restaurant}/> //<div>{user.login}</div>
          ))}
          {/* // edit */}
          {/* <ListSelectFoodReview /> */}
        </GridItem>
        <GridItem></GridItem>
      </GridContainer>

    </div>
  );
}
export default ListRestaurantsProfilReview