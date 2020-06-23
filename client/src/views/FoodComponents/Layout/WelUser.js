import React, { useContext } from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { Switch, Route } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import avatar from "assets/img/Logo-FR-124.png";
import ListRestaurantsProfilReview from "./ReviewList/ListRestaurantsProfilReview";
// import ListFoodsReview from "./ReviewList/ListFoodsReview";
import SearchRestaurant from "./Restaurants/SearchRestaurant";
// import Sum from "./ReviewList/Sum";
// restaurants
import RestaurantContext from "../../../context/restaurants/restaurantContext";
import AlertContext from "../../../context/alert/alertContext";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";

const ListRestaurantStyle = {
  show: {
    display: "block",
    // visibility: "visible"
  },
  notShow: {
    display: "none",
    //visibility: "hidden"
  },
};

export default function WelUser(props) {
  const userPhoto = (userPr) => {
    if (userPr && userPr.photo) {
      return userPr.photo;
    }
    return avatar;
  };

  const useStylesListR = makeStyles(ListRestaurantStyle);
  const classesListR = useStylesListR();
  const useStylesT = makeStyles(stylesT);
  const classesT = useStylesT();
  const useStylesI = makeStyles(stylesI);
  const classesI = useStylesI();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [classList, setClassList] = React.useState("notShow");
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const restaurantContext = useContext(RestaurantContext);
  const { searchFood } = restaurantContext;

  const authContext = useContext(AuthContext);
  const { user } = authContext;
  console.log("The User =", user);

  return (
    <div className={classesT.marginCenter}>
      <Card
        style={{ paddingTop: "100px", width: "90%" }}
        className={classesT.marginCenter}
      >
        <CardBody className={classesT.marginCenter}>
          <GridContainer xs={12} sm={12} md={12} lg={12}></GridContainer>
          <GridContainer className={classesT.marginCenter}>
            <GridItem
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className={classesT.marginCenter}
            >
              <GridContainer className={classesT.marginLeft}>
                <GridItem xs={12} sm={12} md={11} lg={11}>
                  <Card
                    className={
                      { display: "flex", alignItems: "center" } +
                      " " +
                      classes.textCenter
                    }
                  >
                    <CardHeader color="primary" className={classes.cardHeader}>
                      {user && ` Welcome ${user.firstname}   ${user.lastname}`}
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
                        src={userPhoto(user)}
                        alt=""
                        className={
                          {
                            height: "100px",
                            justifyContent: "center",
                            width: "100px",
                          } +
                          " " +
                          classesT.imgFluid +
                          " " +
                          classesI.imgRounded +
                          " " +
                          classesI.imgShadow
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
                      <SearchRestaurant />
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
                    <Route path="/welcome-user/Iranian">
                      {/* <AnchorLink href="#Iranian"></AnchorLink>{" "} */}
                      <ListRestaurantsProfilReview
                        className={classesListR["show"]}
                        category="Iranian"
                      />
                    </Route>
                    <Route path="/welcome-user/Italian">
                      <ListRestaurantsProfilReview
                        className={classesListR["show"]}
                        category="Italian"
                      />
                    </Route>

                    <Route path="/welcome-user/Greek">
                      <ListRestaurantsProfilReview
                        className={classesListR["show"]}
                        category="Greek"
                      />
                    </Route>
                    <Route path="/welcome-user/Indian">
                      <ListRestaurantsProfilReview
                        className={classesListR["show"]}
                        category="Indian"
                      />
                    </Route>
                    <Route path="/welcome-user/Thai">
                      <ListRestaurantsProfilReview
                        className={classesListR["show"]}
                        category="Thai"
                      />
                    </Route>
                    <Route path="/welcome-user/Asian">
                      <ListRestaurantsProfilReview
                        className={classesListR["show"]}
                        category="Asian"
                      />
                    </Route>
                    <Route path="/welcome-user/Mediterranean">
                      <ListRestaurantsProfilReview
                        className={classesListR["show"]}
                        category="Mediterranean"
                      />
                    </Route>
                    <Route path="/welcome-user/American">
                      <ListRestaurantsProfilReview
                        className={classesListR["show"]}
                        category="American"
                      />
                    </Route>
                    <Route path="/welcome-user/Japanese">
                      <ListRestaurantsProfilReview
                        className={classesListR["show"]}
                        category="Japanese"
                      />
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
