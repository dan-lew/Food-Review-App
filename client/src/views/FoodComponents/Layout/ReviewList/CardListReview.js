import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import { Rate } from "antd";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { Link } from "react-router-dom";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import styles from "assets/jss/material-kit-react/views/components.js";

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
const CardListReview = ({
  reviews: { restaurantName, category, nameOfDish, rating, photo, comment },
}) => {
  const useStylesListR = makeStyles(ListRestaurantStyle);
  const classesListR = useStylesListR();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const useStylesI = makeStyles(stylesI);
  const classesI = useStylesI();
  const useStylesT = makeStyles(stylesT);
  const classesT = useStylesT();

  const [classList, setClassList] = React.useState("notShow");
  return (
    <div>
      <GridContainer>
      
        <GridItem>
          <Card
            style={{
              alignItems: "center",
              alignContent: "space-around",
              flex: 1,
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <CardHeader color="primary" className={classes.cardHeader}>
              {" "}
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={5}
                  md={5}
                  lg={5}
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "150px",
                      marginTop: "10px",
                      height: "auto",
                      borderRadius: "10px",
                      textAlign: "center",
                      boxShadow: "1px 1px 2px #ffffff ",
                      padding: "15px",
                    }}
                  >
                    <img
                      src={photo}
                      alt="No Photo"
                      className={
                        {
                          borderRadius: "10px",
                          justifyContent: "center",
                        } +
                        " " +
                        classesI.imgFluid +
                        " " +
                        classesI.imgRounded +
                        " " +
                        classesI.imgShadow
                      }
                    />
                  </div>
                </GridItem>
                <GridItem
                  style={{ paddingLeft: "40px", paddingRight: "40px" }}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                >
                  <h4 style={{ color: "#ffffff" }}>Dish: {nameOfDish}</h4>
                  <p>
                    {" "}
                    Rating: <Rate value={rating} />
                  </p>
                </GridItem>
              </GridContainer>
            </CardHeader>

            <CardBody style={{ textAlign: "left" }}>
              {/* <Link className={classes.navLink}  to={{pathname:"/restaurantsReview", state:restaurantName}}> */}

              {/* </Link> */}
              {/*  <h4 style={{color: "#9c27b0" }}>Name of Dish: {nameOfDish}</h4> */}
              <p style={{ color: "#9c27b0", fontWeight: "bold" }}>
                Category of Restaurants:{" "}
                <span style={{ color: "#000000", fontWeight: "normal" }}>
                  {category}
                </span>
              </p>
              <p style={{ color: "#9c27b0", fontWeight: "bold" }}>
                Comment:{" "}
                <span style={{ color: "#000000", fontWeight: "normal" }}>
                  {comment}
                </span>{" "}
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};
export default CardListReview;
