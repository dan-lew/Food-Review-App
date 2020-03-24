import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import Alerts from "../FoodComponents/Layout/Alerts";
import ReactStars from "react-stars";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import Header from "../FoodComponents/Layout/Header/Header.js";
import HeaderLinks from "../FoodComponents/Layout/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import FileUpload from "./components/FileUpload";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/reviewpgbg.jpg";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import Logo from "assets/img/Logo-FR-124.png";
const useStyles = makeStyles(styles);

const ReviewPage = props => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const useStylesT = makeStyles(stylesT);
  const useStylesI = makeStyles(stylesI);
  const classesT = useStylesT();
  const classesI = useStylesI();
  const classes = useStyles();
  const { ...rest } = props;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const authContext = useContext(AuthContext);
  const { registerReview } = authContext;

  const [review, setReview] = useState({
    restaurantName: "",
    city: "",
    category: "",
    nameOfDish: "",
    dateOfVisit: "",
    price: "",
    photo: "",
    rating: "",
    comment: ""
  });
  const {
    restaurantName,
    city,
    category,
    nameOfDish,
    dateOfVisit,
    price,
    photo,
    rating,
    comment
  } = review;

  const onChange = e =>
    setReview({ ...review, [e.target.name]: e.target.value });

  // console.log("onchange", review);

  const stars = star => {
    //document.getElementById('rating').value=star
    setReview({ ...review, rating: star });
  };

  const getImgPath = path => {
    console.log(path);
    setReview({ ...review, photo: path });
  };

  const onSubmit = e => {
    e.preventDefault();
    try {
      if (
        restaurantName === "" ||
        city === "" ||
        category === "" ||
        nameOfDish === "" ||
        dateOfVisit === "" ||
        price === "" ||
        photo === "" ||
        rating === "" ||
        comment === ""
      ) {
        setAlert(" Please complete all the fields", "danger");
      } else {
        console.log("onSubmit", review);
        registerReview({
          restaurantName,
          city,
          category,
          nameOfDish,
          dateOfVisit,
          price,
          photo,
          rating,
          comment
        });
        console.log(registerReview);
      }
    } catch (error) {
      setAlert(error.msg, "danger");
    }
  };

  return (
    <div>
      <Header
        brand={
          <img
            className={classesI.imgRoundedCircle + " " + classesI.imgFluidLogo}
            src={Logo}
          />
        }
        rightLinks={<HeaderLinks />}
        fixed
        color="dark"
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
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
            <GridItem xs={12} sm={12} md={5}>
              <Card className={classes[cardAnimaton]}>
                <form onSubmit={onSubmit} className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Write a review</h4>
                  </CardHeader>
                  <p className={classes.divider}>
                    {" "}
                    Please complete the form below...
                  </p>
                  <CardBody>
                    <CustomInput
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
                      labelText="Restaurant Location..."
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChange,
                        name: "city",
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-map-marker-alt"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      onChange={onChange}
                      labelText="Type of cuisine..."
                      id="category"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChange,
                        name: "category",
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
                      id="nameOfDish"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChange,
                        name: "nameOfDish",
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
                        onChange={stars}
                        size={40}
                        value={review.rating}
                        color2={"#ffd700"}
                      />
                    </div>
                    <br />
                    <div>
                      <p>Please upload a photo here...</p>
                      <FileUpload getImgPath={getImgPath} />
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
                  <Alerts />
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