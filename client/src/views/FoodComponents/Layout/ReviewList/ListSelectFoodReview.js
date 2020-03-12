// ListSelectFoodReview.js

import React, { useState, useEffect, Fragment } from "react";
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

export default function ListSelectFoodReview(props) {
  const useStyles = makeStyles(styles);
  const useStylesB = makeStyles(stylesB);
  const useStylesI = makeStyles(stylesI);
  const useStylesT = makeStyles(stylesT);
  const classes = useStyles();
  const classesI = useStylesI();
  const classesT = useStylesT();
  console.log(classes);

  let restaurantsState = {
    id: "1",
    url: "",
    img: { src: "https://via.placeholder.com/180x130" },
    name: "Restaurant name",
    rating: "",
    isLoading: "false",
    category: "",
    count: 0
  };
  console.log("state ", restaurantsState.count);
  console.log(restaurantsState.img.src);
  const [restaurants, setRestaurants] = useState(restaurantsState.count);

  const { id, category, count, url, img, name, rating } = props;
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

  let setRest = props => {
    console.log("restaurant");
    console.log(props)
    return props;
   
  };

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

  useEffect(() => {
    function dataShow(data) {
      setRestaurants(data);
    }
    setRest();
  });

  return (
    <div>
      {/* Grid for shows for restaurants */}
      <GridContainer>
        <GridItem>
          <Card>
            <CardBody>
              <CardListRestaurant data={restaurantsState} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
