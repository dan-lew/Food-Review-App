import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../../context/alert/alertContext";
import AuthContext from "../../../context/auth/authContext";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";

// core components
import Header from "../Layout/Header/Header";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/sushi.jpg";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import Logo from "assets/img/Logo-FR-124.png";
import HeaderLinks from "../Layout/Header/HeaderLinks";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);
const useStylesI = makeStyles(stylesI);

const ForgetPassword = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const {
    error,
    clearErrors,
    isAuthenticated,
    forgot_password
  } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/login"); //go to login
    }
    if (error === "invalid credential") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, clearErrors, setAlert, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    Email: ""
  });
  const { email } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    try {
      if (email === "") {
        setAlert("Please enter your Email", "danger");
      } else {
        forgot_password({
          email
        });
      }
    } catch (error) {
      setAlert(error.msg, "danger");
    }
  };
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const classesI = useStylesI();
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand={
          <img alt="LogoImg"
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
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={onSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Reset Password</h4>
                  </CardHeader>
                  {/* <p className={classes.divider}>Or </p> */}
                  <CardBody>
                    <CustomInput
                      onChangeFunction={onChange}
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: email,
                        type: "email",
                        name: "email",
                        required: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button type="submit" simple color="primary" size="lg">
                      reset Password
                    </Button>
                    <Link to="/login" color="danger" size="lg">
                      Back to login
                    </Link>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        {/* <Footer whiteFont /> */}
      </div>
    </div>
  );
};

export default ForgetPassword;
