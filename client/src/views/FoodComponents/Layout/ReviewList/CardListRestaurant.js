import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import { Rate } from "antd";
import GridItem from "components/Grid/GridItem";
import { Switch, Route, Link } from "react-router-dom";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import stylesB from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import stylesP from "assets/jss/material-kit-react/popoverStyles.js";
// import img from "../../../../photos/restaurant/kebab.jpeg"
import SelectFood from "./SelectFood";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles(styles);
const useStylesB = makeStyles(stylesB);
const useStylesP = makeStyles(stylesP);
const useStylesT = makeStyles(stylesT);

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

const CardListRestaurant = ({
  restaurant: { restaurantName, address, city, category, rating, photo }
}) => {
  const [anchorElBottom, setAnchorElBottom] = useState(null);
  const useStylesListR = makeStyles(ListRestaurantStyle);
  const classesListR = useStylesListR();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const useStylesT = makeStyles(stylesT);
  const classesT = useStylesT();
  const useStylesI = makeStyles(stylesI);
  const classesI = useStylesI();
  const useStylesP = makeStyles(stylesP);
  const classesP = useStylesP();

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
              textAlign: "center"
            }}
          >
            <div
              style={{
                width: "150px",
                marginTop: "10px",
                height: "180px",
                alignItems: "center",
                justifyItems: "center",
                borderRadius: "10px",
                boxShadow: "1px 1px 4px #969696",
                justifyContent: "center",
                padding: "10px",
                alignItems: "center",
                display: "block"
              }}
            >
              <img
                src={photo}
                style={{ borderRadius: "10px" }}
                alt="No Photo"
                className={classesI.imgCardTop}
              />
            </div>
            <CardBody>
              {/* zeigt keine name von Restaurant */}
              <h4 style={{ color: "#9c27b0" }}>{restaurantName}</h4>
              <p>{address}</p>
              <p>{city}</p>
              <p>{category}</p>
              <hr style={{color:"#9c27b0"}}></hr>
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