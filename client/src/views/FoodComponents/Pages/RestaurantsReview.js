import React, { useEffect, useContext } from "react";
import { Rate } from "antd";
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Map, { Restaurant } from "../Layout/MapRestaurant";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import NoReviewList from "../Layout/ReviewList/NoReviewList";
import styles from "assets/jss/material-kit-react/views/components.js";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import Logo from "assets/img/Logo-FR-124.png";
import Header from "../Layout/Header/Header.js";
import HeaderLinks from "../Layout/Header/HeaderLinks.js";

import CardListReview from "../Layout/ReviewList/CardListReview";
import ReviewContext from "../../../context/reviewPage/reviewContext";
import Alert from "../Layout/Alert";

export default function RestaurantsReview(props) {
  const useStylesT = makeStyles(stylesT);
  const useStylesI = makeStyles(stylesI);
  const classesT = useStylesT();

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const classesI = useStylesI();

  const { ...rest } = props;
  console.log("props ", props);

  const reviewContext = useContext(ReviewContext);

  const { filterReviewsCategory, reviewsCategory } = reviewContext;
  useEffect(() => {
    filterReviewsCategory(props.location.state);
    console.log("use effect in list review name");
  }, []);
  console.log("reviewsCategory", reviewsCategory);

  console.log(props.location.state);
  let reviewsCards = reviewsCategory.map((reviews) => (
    // <GridItem xs={12} sm={12} md={12} lg={12}>
    <CardListReview key={reviews.id} reviews={reviews} />
    // </GridItem>
  ));

  return (
    <div>
      <div>
        <Alert />
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
                    <h3
                      style={{
                        margin: "30px",
                        justifyContent: "center",
                        textAlign: "center",
                        color: "#9c27b0",
                      }}
                    >
                      <Restaurant name={props.location.state} />
                    </h3>
                    <Map
                      google={props}
                      center={{
                        lat: 53.5510846,
                        lng: 9.9936819,
                      }}
                      height="200px"
                      zoom={12}
                    />
                  </GridItem>
                  <GridItem
                    className={classesT.marginCenter}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                  >
                    {/* reviews rating*/}
                    <GridContainer className={classesT.marginCenter}>
                      {/* reviewsCategory */}
                      {reviewsCategory.length > 0 ? (
                        <>
                          <GridItem>
                            <h3 style={{ paddingLeft: "30px" }}>
                              Your review(s) for {props.location.state}
                            </h3>
                          </GridItem>
                          {reviewsCards}
                        </>
                      ) : (
                        <GridItem>
                          <NoReviewList />
                        </GridItem>
                      )}
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
