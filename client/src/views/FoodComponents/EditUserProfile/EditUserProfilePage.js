import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../../context/alert/alertContext";
import AuthContext from "../../../context/auth/authContext";
import Alerts from "../Layout/Alert";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks1 from "components/Header/HeaderLinks1.js";
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
import image from "assets/img/sushi.jpg";
// import "./style.css"
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import Logo from "assets/img/Logo-FR-124.png";
import HeaderLinks from "../Layout/Header/HeaderLinks";

const useStyles = makeStyles(styles);
const useStylesI = makeStyles(stylesI);

const EditUserProfilePage = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  console.log(alertContext);

  const { setAlert } = alertContext;
  const {
    error,
    isAuthenticated,
    get_user_profile,
    edit_profile,
    user
  } = authContext;
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  console.log(user);
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classesI = useStylesI();
  const classes = useStyles();
  const { ...rest } = props;

  let init = true;
  const [client, setClient] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    dateOfBirth: "",
    city: "",
    password: "",
    password2: ""
  });

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push("/");
    }
    if (init) {
      get_user_profile();
      setClient({
        ...user
      });
      init = false;
    }
  }, [error, isAuthenticated, props.history]);

  const {
    firstname,
    lastname,
    username,
    email,
    dateOfBirth,
    city,
    password,
    password2
  } = client;

  const onChange = e => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const onFocus = e => {
    return (e.target.type = "date");
  };
  const onBlur = e => {
    return (e.target.type = "text");
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log(client);
    let alert = " Please complete all the fields";
    try {
      if (
        firstname === "" ||
        lastname === "" ||
        username === "" ||
        email === "" ||
        dateOfBirth === "" ||
        city === "" ||
        password === ""
      ) {
        setAlert(alert, "danger");
      } else if (password !== password2) {
        setAlert(" Password do not match", "danger");
      } else {
        console.log("onSubmit", client);
        edit_profile({
          firstname,
          lastname,
          username,
          email,
          dateOfBirth,
          city,
          password,
          password2
        });
        console.log("Your profile is edited");
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
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={onSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Edit Profile</h4>
                  </CardHeader>

                  <CardBody>
                    <CustomInput
                      onChangeFunction={onChange}
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: firstname,
                        type: "text",
                        name: "firstname",
                        required: true
                      }}
                    />
                    <CustomInput
                      onChangeFunction={onChange}
                      labelText="Last Name..."
                      id="last"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: lastname,
                        type: "text",
                        name: "lastname",
                        required: true
                      }}
                    />
                    <CustomInput
                      onChangeFunction={onChange}
                      labelText="Username..."
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: username,
                        type: "text",
                        name: "username",
                        required: true
                      }}
                    />
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
                    <CustomInput
                      onChangeFunction={onChange}
                      onFocusFunction={onFocus}
                      labelText="Date of Birth..."
                      id="dateOfBirth"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: dateOfBirth,
                        name: "dateOfBirth",
                        type: "text",
                        required: true
                      }}
                    />
                    <CustomInput
                      onChangeFunction={onChange}
                      labelText="City"
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: city,
                        type: "text",
                        name: "city",
                        required: true
                      }}
                    />
                    <CustomInput
                      onChangeFunction={onChange}
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
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
                        autoComplete: "off"
                      }}
                    />
                    <CustomInput
                      onChangeFunction={onChange}
                      labelText="Confirm Password"
                      id="pass2"
                      formControlProps={{
                        fullWidth: true
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
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <Alerts />
                  <CardFooter className={classes.cardFooter}>
                    <Button simple type="submit" color="primary" size="lg">
                      Upload
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
export default EditUserProfilePage;
