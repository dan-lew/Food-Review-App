import React, { useStyles, Fragment } from "react";
import { Link } from "react-router-dom";

// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapContainer from "../Layout/MapContainer";
import Map from "../Layout/Map";
import MapMarkers from "../Layout/MapMarkers";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";

import { makeStyles } from "@material-ui/core/styles";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import styles from "assets/jss/material-kit-react/views/components.js";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import Logo from "assets/img/Logo-FR-124.png";
import Header from "../Layout/Header/Header.js";
import HeaderLinks from "../Layout/Header/HeaderLinks.js";
 
export default function RestaurantsReview(props) {
  const useStylesT = makeStyles(stylesT);
  const useStylesI = makeStyles(stylesI);
  const classesT = useStylesT();
  console.log(classesT);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const classesI = useStylesI();
  console.log(classes);
  const { ...rest } = props;

  let restaurantView = {
    id: "1",
    name: "Restaurant name",
    url: "wwww.restaurant.de",
    phone: "12345",
    email: "restaurant@gmail.com",
    rating: 2,
    food: "Lasagne",
    date: new Date(),
    user: {
      src: "https://via.placeholder.com/60x60",
      description: "bla bla bla bla",
      name: "user name",
      rating: 3
    }
  };
  console.log(restaurantView.rating);

  const starShow = (count) => {
    for (let i = 0; i <= count; i++) {
      return <StarIcon style={{ color: "yellow" }}></StarIcon>;
    }
  };
  const ratingStar = rating => {
    switch (rating) {
      case 1:
        return (
          <Fragment>
            {starShow(1)}
            {/* <StarIcon style={{color:"yellow"}}></StarIcon> */}
          </Fragment>
        );
        break;
      case 2:
        return (
          <Fragment>
            {/* {starShow(2)} */}
            <StarIcon style={{ color: "yellow" }}></StarIcon>
            <StarIcon style={{ color: "yellow" }}></StarIcon>
          </Fragment>
        );
        break;
      case 3:
        return (
          <Fragment>
            {starShow(3)}
            {/* <StarIcon style={{color:"yellow"}}></StarIcon>
            <StarIcon style={{color:"yellow"}}></StarIcon>
            <StarIcon style={{color:"yellow"}}></StarIcon> */}
          </Fragment>
        );
        break;
      case 4:
        return (
          <Fragment>
            <StarIcon style={{ color: "yellow" }}></StarIcon>
            <StarIcon style={{ color: "yellow" }}></StarIcon>
            <StarIcon style={{ color: "yellow" }}></StarIcon>
            <StarIcon style={{ color: "yellow" }}></StarIcon>
          </Fragment>
        );
        break;
      case 5:
        return (
          <Fragment>
            <StarIcon style={{ color: "yellow" }}></StarIcon>
            <StarIcon style={{ color: "yellow" }}></StarIcon>
            <StarIcon style={{ color: "yellow" }}></StarIcon>
            <StarIcon style={{ color: "yellow" }}></StarIcon>
            <StarIcon style={{ color: "yellow" }}></StarIcon>
          </Fragment>
        );
        break;

      default:
        return (
          <Fragment>
            {/* kein rating enthalten */}
            <StarBorderIcon></StarBorderIcon>
          </Fragment>
        );
    }
  };

  return (
    <div>
      <div>
        <Header
          brand={
            <img
              className={
                classesI.imgRoundedCircle + " " + classesI.imgFluidLogo
              }
              src={Logo}
            />
          }
          rightLinks={<HeaderLinks />}
          fixed
          color="dark"
          changeColorOnScroll={{
            height: 100,
            color: "white"
          }}
          {...rest}
        />
      </div>
      <div
        // style={{ paddingTop: "50px", width: "90%" }}
        className={classesT.marginCenter}
      >
        <Card
          style={{ paddingTop: "100px", width: "90%" }}
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
                      <CardHeader
                        color="primary"
                        className={classes.cardHeader}
                      >
                        Restaurant name
                      </CardHeader>
                      {/* <h3  color="primary">Restaurant name</h3> */}
                      <CardBody
                        className={
                          { display: "flex", alignItems: "center" } +
                          " " +
                          classesT.marginRight
                        }
                      >
                        <p>{restaurantView.food}</p>
                        <p>{ratingStar(restaurantView.rating)}</p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4} lg={4}>
                    <Card>
                      <CardBody>
                        <h4>Contact Info</h4>
                        <div
                          style={{
                            borderRadius: "20px",
                            borderColor: "#9c27b0"
                          }}
                        >
                          <p>
                            Website: {restaurantView.url}
                            <br></br>Tel: {restaurantView.phone}
                            <br></br>Email: {restaurantView.email}{" "}
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem>
                    {/* MapContainer */}
                    <Map
                      google={props.google}
                      center={{
                        lat: 53.5510846,
                        lng: 9.9936819
                      }}
                      width="20%"
                      height="200px"
                      zoom={15}
                    />
                    <br></br>
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
              <GridItem xs={12} sm={12} md={10} lg={8}>
                {/* reviews rating*/}
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <h3 style={{ paddingLeft: "30px" }}>Your reviews...</h3>
                  </GridItem>
                  <GridItem
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className={classesT.marginLeft}
                  >
                    <Card>
                      <CardHeader
                        style={{}}
                        color="primary"
                        className={classes.cardHeader}
                      >
                        <GridContainer>
                          <GridItem xs={12} sm={1} md={1} lg={1}>
                            <img
                              src={restaurantView.user.src}
                              className={
                                classesI.imgRoundedCircle +
                                " " +
                                classesI.imgFluidUser +
                                " mui--align-middle"
                              }
                            />
                          </GridItem>

                          <GridItem xs={12} sm={12} md={8} lg={8}>
                            <h3>{restaurantView.user.name} </h3>
                            <p>{ratingStar(restaurantView.user.rating)}</p>
                          </GridItem>
                        </GridContainer>
                      </CardHeader>
                      <CardBody>
                        <div>
                          <p>{restaurantView.user.description}</p>
                        </div>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
