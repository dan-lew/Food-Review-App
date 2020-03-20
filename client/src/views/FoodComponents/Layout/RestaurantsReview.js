import React, { useStyles } from "react";
import { Link } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

import CardHeaderList from "./CardList/CardHeaderList";
import CardBodyList from "./CardList/CardBodyList";
import ListRestaurantsReview from "./ReviewList/ListRestaurantsReview";
import ListFoodsReview from "./ReviewList/ListFoodsReview";
import Sum from "./ReviewList/Sum";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function RestaurantsReview(props) {
  const useStylesT = makeStyles(stylesT);

  const classesT = useStylesT();
  console.log(classesT);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  console.log(classes);
  const { ...rest } = props;

  let restaurantView = {
    id: "1",
    name: "Restaurant name",
    url: "wwww.restaurant.de",
    phone: "12345",
    email: "restaurant@gmail.com",
    rating: 5,
    food: "Lasagne",
    date: new Date(),
    user: {
      src: "https://via.placeholder.com/180x130",
      description: "bla bla bla bla"
    }
  };

  return (
    <div
      // style={{ paddingTop: "50px", width: "90%" }}
      className={classesT.marginCenter}
    >
      <Card
        style={{ paddingTop: "50px", width: "90%" }}
        className={classesT.marginCenter}
      >
        <CardBody className={classesT.marginCenter}>
          <GridContainer className={classesT.marginCenter}>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classesT.marginCenter}
            >
              <GridContainer>
                <GridItem xs={12} sm={12} md={4} lg={4}>
                  <Card>
                    <h3  color="primary">Restaurant name</h3>
                    <CardHeader  className={classes.cardHeader}>
                      Restaurant name
                    </CardHeader>
                    <CardBody
                      className={
                        { display: "flex", alignItems: "center" } +
                        " " +
                        classes.textCenter
                      }
                    ></CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4} lg={4}>
                  <Card>
                    <CardBody></CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem>
              <GridContainer className={classesT.marginLeft}>
                <GridItem
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  className={classesT.marginLeft}
                ></GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={8} lg={8}>
              {/* reviews rating*/}
              <GridContainer>
                <GridItem xs={12} sm={12} md={8} lg={12}>
                  <h3 style={{ paddingLeft: "30px" }}>Your reviews...</h3>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  md={8}
                  lg={10}
                  className={classesT.marginLeft}
                >
                  <Card>
                    <CardHeader
                      style={{}}
                      color="primary"
                      className={classes.cardHeader}
                    >
                      <CardHeaderList />
                    </CardHeader>
                    <CardBody>
                      <CardBodyList />
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  md={8}
                  lg={10}
                  className={classesT.marginLeft}
                >
                  <Card>
                    <CardHeader
                      style={{}}
                      color="primary"
                      className={classes.cardHeader}
                    >
                      <CardHeaderList />
                    </CardHeader>
                    <CardBody>
                      <CardBodyList />
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    </div>
  );
}
