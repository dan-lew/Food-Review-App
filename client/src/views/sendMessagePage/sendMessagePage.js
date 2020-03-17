import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Header from "../FoodComponents/Layout/Header/Header";
import HeaderLinks from "../FoodComponents/Layout/HeaderLogin/HeaderLinksUser.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
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
import image from "assets/img/sendmsgbg1.jpg";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import Logo from "assets/img/Logo-FR-124.png";
const useStyles = makeStyles(styles);

const SendMessagePage = props => {
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
  const { sendMail } = authContext;

  const [sendMessage, setMessage] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { name, email, message } = sendMessage;

  const onChange = e =>
    setMessage({ ...sendMessage, [e.target.name]: e.target.value });
  console.log("onChange", sendMessage);

  const onSubmit = e => {
    e.preventDefault();
    sendMail({
      name,
      email,
      message
    });
    if (name === "" || email === "" || message === "") {
      setAlert("please complete all the fields", "danger");
    } else {
      sendMail({
        name,
        email,
        message
      });
    }
    console.log("onsubmit", message);
  };
  return (
    <div>
    <Header
          brand={
            <img
              className={
                classesI.imgRoundedCircle + " " + classesI.imgFluidLogo
              }
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
                    <h4>Send us a message</h4>
                  </CardHeader>
                  <p className={classes.divider}>
                    {" "}
                    Please complete the form below...
                  </p>
                  <CardBody>
                    <CustomInput
                      onChange={onChange}
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChange,
                        name: "name",
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      onChange={onChange}
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: onChange,
                        name: "email",
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Your Message"
                      id="sendMessage"
                      formControlProps={{
                        fullWidth: true,
                        className: classes.textArea
                      }}
                      inputProps={{
                        onChange: onChange,
                        name: "message",
                        multiline: true,
                        rows: 5,
                        endAdornment: [
                          <InputAdornment position="end">
                            <i className="fas fa-comment"></i>
                          </InputAdornment>
                        ]
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      type="submit"
                      onSubmit={onSubmit}
                      simple
                      color="primary"
                      size="lg"
                    >
                      Get started
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
export default SendMessagePage;
