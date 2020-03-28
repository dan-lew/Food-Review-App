import React,{useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
// import Button from "components/CustomButtons/Button.js";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
// import StarIcon from "@material-ui/icons/Star";
// import IconButton from "@material-ui/core/IconButton";
// import Icon from "@material-ui/core/Icon";
import styles from "assets/jss/material-kit-react/views/components.js";


export default function RestaurantsList(props) {
  props.restaurants = {
    url: "",
    photo: "",
    name: "",
    rating: "",
    isLoading: "false",
    fetchedData: []
  };
  console.log(props.restaurants)
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  console.log(classes)
  console.log("RestaurantsList")
  // const { url, photo,name,rating,fetchedData } = props;
  // const [restaurants, setRestaurants] = useState();
  return (
      <GridContainer>
          <GridItem>

          </GridItem>
      </GridContainer>
  )
}

// export default RestaurantsList
