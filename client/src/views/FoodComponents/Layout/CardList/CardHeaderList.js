import React, { useContext, useEffect } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import avatar from "assets/img/Logo-FR-124.png";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ReviewContext from "../../../../context/reviewPage/reviewContext";
import { Rate } from "antd";

export default function CardHeaderList(props) {
  console.log(avatar);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const useStylesI = makeStyles(stylesI);
  const classesI = useStylesI();
  console.log(classes);
  const photo = props.photo;
  // const { ...rest } = props;

  const reviewContext = useContext(ReviewContext);
  const { reviews, getReviews } = reviewContext;
  console.log(reviews, getReviews);

  return (
    <div>
      {/* <GridContainer xs={12} sm={12} md={12} lg={12}>
            <GridItem style={{textAlign:"right"}}>
            Date:{" "}
            </GridItem>
        </GridContainer> */}
      <GridContainer>
        <GridItem xs={12} sm={1} md={1} lg={1}>
          <img
            alt="not working"
            src={photo}
            className={
              classesI.imgRoundedCircle +
              " " +
              classesI.imgFluidUser +
              " mui--align-middle"
            }
          />
        </GridItem>

        <GridItem xs={12} sm={5} md={4} lg={3}>
          {props.restaurantName}
          <br></br>
          {props.nameOfDish}
        </GridItem>

        <GridItem xs={12} sm={4} md={6} lg={5}>
          {props.dateOfVisit}
          <Rate value={props.rating} />
          
          {/* <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderIcon rating={props.rating} />
          <StarBorderIcon /> */}
        </GridItem>
      </GridContainer>
    </div>
  );
}
