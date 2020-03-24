import React, { useStyles,Fragment, useEffect ,useContext} from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

import StarIcon from "@material-ui/icons/Star";
import avatar from "assets/img/faces/avatar.jpg";

import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Datetime from "react-datetime";
import CardHeaderList from "./CardList/CardHeaderList";
import CardBodyList from "./CardList/CardBodyList";
import ListRestaurantsProfilReview from "./ReviewList/ListRestaurantsProfilReview";
import ListFoodsReview from "./ReviewList/ListFoodsReview";
import SearchRestaurant from "./Restaurants/SearchRestaurant";
import Sum from "./ReviewList/Sum";
// restaurants
import RestaurantContext from '../../../context/restaurants/restaurantContext'

const ListRestaurantStyle = {
  show: {
     display: "block"
   // visibility: "visible"
  },
  notShow: {
     display: "none"
    //visibility: "hidden"
  }
};

export default function WelUser(props) {

  const useStylesListR = makeStyles(ListRestaurantStyle);
  const classesListR = useStylesListR();
  const useStylesT = makeStyles(stylesT);
  const classesT = useStylesT();

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  
  const [classList, setClassList] = React.useState("notShow");

  const handleShow = () => {
    if (classList === "show") {
      setClassList("notShow");
    } else {
      setClassList("show");
    }
  };

  const handleSearch=(food)=>{
    console.log(food);
    // edit
    //backend 
    //get data from restaurant with users food
  }

  let listCategory = ["Italian", "Indian", "Japanese", "Greek", "Thai"];

  return (
    <div
      className={classesT.marginCenter} style={{ width: "90%" }}
    >
      <Card
        className={classesT.marginCenter} style={{ paddingTop: "140px"}}
      >
        <CardBody className={classesT.marginCenter}>
          <GridContainer className={classesT.marginCenter}>
            <GridItem
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className={classesT.marginCenter}
            >
              <GridContainer className={classesT.marginLeft}>
                {/* Foto */}
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <Card>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      Welcome User (Home)
                    </CardHeader>
                    <CardBody
                      className={
                        { display: "flex", alignItems: "center" } +
                        " " +
                        classes.textCenter
                      }
                    >
                      {/* User foto links */}
                      <img
                        src={avatar}
                        alt="..."
                        className={
                          {
                            height: "100px",
                            justifyContent: "center",
                            width: "100%"
                          } +
                          classesT.imgRaised +
                          " " +
                          classesT.imgRoundedCircle +
                          " " +
                          classesT.imgFluid
                        }
                      />
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={8} lg={8}>
              {/* data search*/}
              <GridContainer>
                <GridItem className={classesT.marginLeft}>
                  <Card>
                    <CardBody>
                      <SearchRestaurant                    
                        category={listCategory} 
                        searchFunction={handleSearch}
                      />
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem>
               <GridContainer>
                <GridItem>
                  <Switch>
                    <Route path="/login/welcome-user/Japanese">
                      <h1 className={classesT.primaryText + " "+classesT.header} >Japanese</h1>
                      <ListRestaurantsProfilReview className={classesListR["show"]} category = "Japanese" />
                    </Route>
                    <Route path="/login/welcome-user/Italian">
                      <h1  className={classesT.primaryText + " "+classesT.header}>Italian</h1>
                      <ListRestaurantsProfilReview className={classesListR["show"]} category = "Italian"/>
                    </Route>
                    <Route path="/login/welcome-user/Indian">
                      <h1  className={classesT.primaryText + " "+classesT.header}>Indian</h1>
                      <ListRestaurantsProfilReview className={classesListR["show"]} category = "Indian"/>
                    </Route>
                    <Route path="/login/welcome-user/Greek">
                      <h1  className={classesT.primaryText + " "+classesT.header}>Greek</h1>
                      <ListRestaurantsProfilReview className={classesListR["show"]} category = "Greek"/>
                    </Route>
                    <Route path="/login/welcome-user/Thai">
                      <h1  className={classesT.primaryText + " "+classesT.header}>Thai</h1>
                      <ListRestaurantsProfilReview className={classesListR["show"]} category = "Thai" />
                    </Route>
                  </Switch>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    </div>
  );
}

