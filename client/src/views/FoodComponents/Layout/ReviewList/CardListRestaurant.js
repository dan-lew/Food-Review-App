import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
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

export default function CardListRestaurant(props) {
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
  const handleShow = () => {
    if (classList === "show") {
      setClassList("notShow");
    } else {
      setClassList("show");
    }
  };
  console.log(props.data.name);
  console.log("");
  // const [classList, setClassList] = React.useState("display");
  //   const handleShow = () => {
  //     if (classList === "block") {
  //       setClassList("display");
  //     } else {
  //       setClassList("block");
  //     }
  //   };

  return (
    <div>
      {" "}
      <GridContainer>
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <img
            // style={{ height: "130px", width: "180px", display: "block" }}
            style={{ display: "block" }}
            className={classesI.imgCardTop}
            src={props.data.img.src}
            onClick={event => setAnchorElBottom(event.currentTarget)}
            // onClick={handleShow}
          />
          {/* </Fragment> */}
          <CardBody>
            <h4>{props.data.name}</h4>
          </CardBody>
          <Popover
            classes={{
              paper: classesP.popover
            }}
            open={Boolean(anchorElBottom)}
            anchorEl={anchorElBottom}
            onClose={() => setAnchorElBottom(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <div className={classesP.popoverBody}>
              <SelectFood />
            </div>
          </Popover>
        </GridItem>
        <GridItem className={classesListR[classList]}>
          <SelectFood />
          {/* <Card>
            {" "}
            <CardHeader color="primary">Select food review for : </CardHeader>
            <CardBody>
              <Link
                style={{ color: "#9c27b0" }}
                className={classes.navLink}
                to="/foodRating"
              >
                Lasagne
              </Link>
              <br></br>
              <Link
                style={{ color: "#9c27b0" }}
                className={classes.navLink}
                to="/foodRating"
              >
                Spaghetti
              </Link>
              <br></br>
              <Link
                style={{ color: "#9c27b0" }}
                className={classes.navLink}
                to="/foodRating"
              >
                Pasta
              </Link>
            </CardBody>
          </Card> */}
        </GridItem>
      </GridContainer>
    </div>
  );
}
