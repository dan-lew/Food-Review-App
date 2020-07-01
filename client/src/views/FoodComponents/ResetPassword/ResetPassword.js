import React, { useState, useContext, useEffect } from "react";
import Alerts from "../Layout/Alert";
import AlertContext from "../../../context/alert/alertContext";
import AuthContext from "../../../context/auth/authContext";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// core components
import Header from "../Layout/Header/Header.js";
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

const useStyles = makeStyles(styles);
const useStylesI = makeStyles(stylesI);

const ResetPassword = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const {
    validToken,
    resetPassword,
    checkTokenPassword,
    error,
    clearErrors,
    isAuthenticated,
  } = authContext;
  const [passData, setpassData] = useState({
      token: props.match.params.token,
      password: "",
      password2: "",
    });
    const { token, password, password2 } = passData;

  console.log(validToken)

  useEffect(() => {
    checkTokenPassword(token)
    if (isAuthenticated) {
      props.history.push("/welcome-user"); //go to profile page
    }
    if (error === "invalid credential") {
      setAlert(error, "danger");
      clearErrors();
    }
    if(!validToken){
      setAlert('token is not valid',"danger")
    }
  }, [validToken,error, isAuthenticated, props.history]);

  
  const onChange = (e) =>
    setpassData({ ...passData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === "" || password2 === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      if (password !== password2) {
        setAlert("Passwords should match ", "danger");
      } else {

        resetPassword({password,password2})
        props.history.push('/login')
      }
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
          color: "white",
        }}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={onSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>New Password</h4>
                  </CardHeader>
                  {/* <p className={classes.divider}>Or </p> */}
                  <CardBody>
                    <CustomInput
                      onChangeFunction={onChange}
                      labelText="Password..."
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: password,
                        type: "password",
                        name: "password",
                        required: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      onChangeFunction={onChange}
                      labelText="Confirm Password"
                      id="pass2"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: password2,
                        type: "password",
                        name: "password2",
                        required: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <Alerts />  
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                                                     
                  <Button disabled={!validToken} type="submit" simple color="primary" size="lg">
                      Reset Password
                    </Button>
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

export default ResetPassword;
