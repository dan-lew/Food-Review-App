import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
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

export default function ReviewPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
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
                <form className={classes.form}>
                  <CardHeader color="warning" className={classes.cardHeader}>
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
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i class="fas fa-home"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Type of cuisine..."
                      id="typeofcuisine"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i class="fas fa-utensils"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Type of dish..."
                      id="typeofdish"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i class="fas fa-utensils"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="dateofvisit"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "date",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i class="fas fa-calendar-alt"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Price of the food..."
                      id="price"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i class="fas fa-dollar-sign"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                    
                    
                    <CustomInput
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
                            <i class="fas fa-comment fa-lg"></i>
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
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
}
