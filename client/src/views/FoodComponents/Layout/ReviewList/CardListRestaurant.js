import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import { Rate } from "antd";
import GridItem from "components/Grid/GridItem";
// import { Switch, Route, Link } from "react-router-dom";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import { Link } from "react-router-dom";

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
const CardListRestaurant = ({
  restaurant: {
    restaurantName,
    address,
    city,
    category,
    rating,
    photo,
    website,
  },
}) => {
  const [anchorElBottom, setAnchorElBottom] = useState(null);
  const useStylesListR = makeStyles(ListRestaurantStyle);
  const classesListR = useStylesListR();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const useStylesI = makeStyles(stylesI);
  const classesI = useStylesI();

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

              alignContent: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                padding: "0px",
                marginTop: "10px",
                height: "250px",
                borderRadius: "10px",
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <div
                style={{
                  boxShadow: "1px 1px 4px #969696",
                  padding: "15px",
                  borderRadius: "10px",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  src={photo}
                  style={{
                    borderRadius: "10px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    width: "150px",
                    height: "auto",
                  }}
                  alt="No Photo"
                  className={classesI.imgCardTop}
                />
              </div>
            </div>
            <CardBody>

              <Link
                className={classes.navLink}
                to={{ pathname: "/restaurantsReview", state: {name: restaurantName, city: city }}}
              >
                <h4 style={{ color: "#9c27b0" }}>{restaurantName}</h4>
              </Link>
              <p>{address}</p>
              <p>{city}</p>
              <p>{category}</p>
              <a
                href={website}
                style={{ color: "#9c27b0", fontWeight: "bold" }}
                target="_blank"
              >
                Menu
              </a>
              <hr style={{ color: "#9c27b0" }}></hr>
              <span>
                {" "}
                Rating - 
              </span><Rate value={rating} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};
export default CardListRestaurant;
