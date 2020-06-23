<<<<<<< HEAD
import React ,{useState}from "react";
=======
import React, { useState } from "react";
>>>>>>> 33c1c1189a4370db560165e1959c8c02c338e73d
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import { Rate } from "antd";
import GridItem from "components/Grid/GridItem";
// import { Switch, Route, Link } from "react-router-dom";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
<<<<<<< HEAD
// import CardHeader from "components/Card/CardHeader.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
=======
//import RestaurantsReview from 'views/FoodComponents/Pages/RestaurantsReview';
import { Link } from "react-router-dom";
>>>>>>> 33c1c1189a4370db560165e1959c8c02c338e73d
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import styles from "assets/jss/material-kit-react/views/components.js";
<<<<<<< HEAD
import stylesP from "assets/jss/material-kit-react/popoverStyles.js";
// import img from "../../../../photos/restaurant/kebab.jpeg"
// import SelectFood from "./SelectFood";
// import Popover from "@material-ui/core/Popover";
=======
>>>>>>> 33c1c1189a4370db560165e1959c8c02c338e73d


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
  restaurant: { restaurantName, address, city, category, rating, photo },
}) => {
  const [anchorElBottom, setAnchorElBottom] = useState(null);
  const useStylesListR = makeStyles(ListRestaurantStyle);
  const classesListR = useStylesListR();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const useStylesI = makeStyles(stylesI);
  const classesI = useStylesI();

<<<<<<< HEAD
=======

>>>>>>> 33c1c1189a4370db560165e1959c8c02c338e73d
  const [classList, setClassList] = React.useState("notShow");
  return (
    <div>
      <GridContainer >
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
                boxShadow: "1px 1px 4px #969696",
                height:"auto",
                padding: "10px",
                marginTop: "10px",
                height: "180px",
                borderRadius: "10px",
                textAlign: "center",
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img
                src={photo}
                style={{ borderRadius: "10px",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                width: "150px",
                height:"auto",
              }}
                alt="No Photo"
                className={classesI.imgCardTop}
              />
            </div>
            <CardBody>
              {/* zeigt keine name von Restaurant */}                                             
              <Link className={classes.navLink}  to={{pathname:"/restaurantsReview", state:restaurantName}}>
                <h4 style={{ color: "#9c27b0" }}>{restaurantName}</h4>
              </Link>
              <p>{address}</p>
              <p>{city}</p>
              <p>{category}</p>
              <hr style={{ color: "#9c27b0" }}></hr>
              <p>
                {" "}
                Rating - <Rate value={rating} />
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};
export default CardListRestaurant;
