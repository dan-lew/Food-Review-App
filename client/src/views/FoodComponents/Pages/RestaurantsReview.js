import React from "react";
import { Rate } from "antd";
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Map from "../Layout/Map";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { makeStyles } from "@material-ui/core/styles";

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
      src: "https://via.placeholder.com/60x70",
      description: "bla bla bla bla",
      name: "user name",
      rating: 3,
    },
  };
  console.log(restaurantView.rating);

  return (
    <div>
      <div>
        <Header
          brand={
            <img
              alt="LogoImg"
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
            color: "white",
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
                        <p>
                          {" "}
                          Rating - <Rate value={restaurantView.rating} />
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4} lg={4}>
                    <Card>
                      <CardBody>
                        <h4 style={{ color: "#9c27b0" }}>Contact Info</h4>
                        <div
                          style={{
                            borderRadius: "20px",
                            borderColor: "#9c27b0",
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
                </GridContainer>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <GridContainer className={classesT.marginCenter}>
                  <GridItem
                    xs={12}
                    sm={12}
                    md={8}
                    lg={8}
                    style={{
                      alignItems: "space-around",
                      textAlign: "center",
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* MapContainer */}
                    <Map
                      google={props.google}
                      center={{
                        lat: 53.5510846,
                        lng: 9.9936819,
                      }}
                      height="200px"
                      zoom={15}
                    />
                    <br></br>
                  </GridItem>
                  <GridItem
                    className={classesT.marginCenter}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    {/* reviews rating*/}
                    <GridContainer className={classesT.marginCenter}>
                      <GridItem
                        className={classesT.marginCenter}
                        xs={12}
                        sm={12}
                        md={10}
                        lg={8}
                      >
                        <GridItem>
                          <h3 style={{ paddingLeft: "30px" }}>
                            Your reviews...
                          </h3>
                        </GridItem>

                        <Card>
                          <CardHeader
                            color="primary"
                            className={classes.cardHeader}
                          >
                            <GridContainer>
                              <GridItem xs={12} sm={3} md={3} lg={3}>
                                <img
                                  alt="Photo"
                                  src={restaurantView.user.src}
                                  className={
                                    classesI.imgFluidUser +
                                    " mui--align-middle" +
                                    " " +
                                    classesI.imgShadow +
                                    " " +
                                    classesI.imgRounded
                                  }
                                />
                              </GridItem>

                              <GridItem xs={12} sm={7} md={7} lg={7}>
                                <h4>{restaurantView.user.name} </h4>
                                <p>
                                  {" "}
                                  Rating -{" "}
                                  <Rate value={restaurantView.user.rating} />
                                </p>
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
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
