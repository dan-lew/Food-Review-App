import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import ReactStars from "react-stars";
import AddPhoto from "./AddPhoto/addPhoto";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/reviewpgbg.jpg";

const useStyles = makeStyles(styles);

const ReviewPage = props => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const ratingChanged = newRating => {
    console.log(newRating);
  };

  const classes = useStyles();
  const { ...rest } = props;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const authContext = useContext(AuthContext);
  const { register } = authContext;

  const [review, setReview] = useState({
    restaurantName: "",
    category: "",
    nameOfFood: "",
    dateOfVisit: "",
    price: "",
    photo: "",
    rating: "",
    comment: ""
  });
  const {
    restaurantName,
    category,
    nameOfFood,
    dateOfVisit,
    price,
    photo,
    rating,
    comment
  } = review;
  const onChange = e =>
    setReview({ ...review, [e.target.restaurantName]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (
      restaurantName === "" ||
      category === "" ||
      nameOfFood === "" ||
      dateOfVisit === "" ||
      price === "" ||
      photo === "" ||
      rating === "" ||
      comment === ""
    ) {
      setAlert("please complete all the fields", "danger");
    } else {
      register({
        restaurantName,
        category,
        nameOfFood,
        dateOfVisit,
        price,
        photo,
        rating,
        comment
      });
      console.log("Review Added");
    }
  };

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Food Reviews"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form onSubmit={onSubmit} className={classes.form}>
                  <CardHeader color="warning" className={classes.cardHeader}>
                    <h4>Write a review</h4>
                  </CardHeader>
                  <p className={classes.divider}>
                    {" "}
                    Please complete the form below...
                  </p>
                  <CardBody>
                    <CustomInput
                      onChange={onChange}
                      labelText="Restaurant Name..."
                      id="restaurantName"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-home"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      onChange={onChange}
                      labelText="Type of cuisine..."
                      id="typeofcuisine"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-utensils"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      onChange={onChange}
                      labelText="Type of dish..."
                      id="typeofdish"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-utensils"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="dateofvisit"
                      onChange={onChange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "date",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-calendar-alt"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      onChange={onChange}
                      labelText="Price of the food..."
                      id="price"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-dollar-sign"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                    <div>
                      <p>Please provide an overall rating... </p>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={40}
                        color2={"#ffd700"}
                      />
                    </div>

                    <div>
                      <br />
                      <AddPhoto />
                    </div>

                    <CustomInput
                      onChange={onChange}
                      labelText="Your Review"
                      id="message"
                      formControlProps={{
                        fullWidth: true,
                        className: classes.textArea
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-comment fa-lg"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button type="submit" simple color="primary" size="lg">
                      Add Review
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
};
export default ReviewPage;
