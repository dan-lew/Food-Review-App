import React, { useContext } from "react";
import avatar from "assets/img/Logo-FR-124.png";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ReviewContext from "../../../../context/reviewPage/reviewContext";
import { Rate } from "antd";

export default function CardHeaderList(props) {
  //console.log(avatar);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const useStylesI = makeStyles(stylesI);
  const classesI = useStylesI();
  //console.log(classes);
  const photo = props.photo;
  // const { ...rest } = props;

  const reviewContext = useContext(ReviewContext);
  const { reviews, getReviews } = reviewContext;
  //console.log(reviews, getReviews);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={2} md={2} lg={2}>
          <img
            alt="No Photo"
            src={photo}
            className={
              classesI.imgFluidUser +
              " mui--align-middle" +
              " " +
              classesI.imgRounded +
              " " +
              classesI.imgShadow
            }
          />
        </GridItem>

        <GridItem xs={12} sm={5} md={5} lg={4}>
          {props.restaurantName}
          <br></br>
          {props.nameOfDish}
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={5}>
          {props.dateOfVisit}
          <Rate value={props.rating} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
