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

  const classes = useStyles();
  const { ...rest } = props;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const authContext = useContext(AuthContext);
  const { register } = authContext;

  const [review, setReview] = useState({
    restaurantName: "",
    nameOfFood: "",
    typeofdish: "",
    dateOfVisit: "",
    price: "",
    photo: "",
    rating: "",
    comment: ""
  });
  const {
    restaurantName,
    nameOfFood,
    typeofdish,
    dateOfVisit,
    price,
    photo,
    rating,
    comment
  } = review;

  const onChange = (e) =>
    setReview({ ...review, [e.target.restaurantName]: e.target.value });
  console.log('onchange', review);


  const onSubmit = e => {
    e.preventDefault();
    register({
      restaurantName,
      nameOfFood,
      typeofdish,
      dateOfVisit,
      price,
      photo,
      rating,
      comment
    });
    if (
      restaurantName === "" ||
      nameOfFood === "" ||
      typeofdish === "" ||
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
        nameOfFood,
        typeofdish,
        dateOfVisit,
        price,
        photo,
        rating,
        comment
      });
    }
    console.log("onSubmit", restaurantName);
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
                        onChange: onChange,
                        name: "restaurantName",
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
                      id="nameOfFood"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChange,
                        name: "nameOfFood",
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
                        onChange: onChange,
                        name: "typeofdish",
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-utensils"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="dateodateOfVisitfvisit"
                      onChange={onChange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChange,
                        name: "dateOfVisit",
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
                        onChange: onChange,
                        name: "price",
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
                        onChange={onChange}
                        size={40}
                        color2={"#ffd700"}
                      />
                    </div>
                    <input type="hidden" id="rating" name="rating" />
                    <div>
                      <br />
                      <AddPhoto onChange={onChange} name="photo" />
                    </div>

                    <CustomInput
                      onChange={onChange}
                      labelText="Your Review"
                      id="comment"
                      formControlProps={{
                        fullWidth: true,
                        className: classes.textArea
                      }}
                      inputProps={{
                        onChange: onChange,
                        name: "comment",
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
                    <Button
                      
                      type="submit"
                      simple
                      color="primary"
                      size="lg"
                    >
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
