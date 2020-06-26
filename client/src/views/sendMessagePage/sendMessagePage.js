import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import Alerts from "../FoodComponents/Layout/Alert";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Header from "components/Header/Header.js";
import HeaderLinks from "../FoodComponents/Layout/Header/HeaderLinks";
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
import Logo from "assets/img/Logo-FR-124.png";
const useStyles = makeStyles(styles);

const SendMessagePage = props => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const useStylesI = makeStyles(stylesI);

  const classesI = useStylesI();
  const classes = useStyles();
  const { ...rest } = props;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const authContext = useContext(AuthContext);
  const { sendMail } = authContext;
  let successMessage = false;
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
    try {
      if (name === "" || email === "" || message === "") {
        setAlert(" Please complete all the fields", "danger");
      } else {
        console.log("onsubmit", sendMessage);
        sendMail({
          name,
          email,
          message
        });
        successMessage = true;
        setAlert(" Your message has been sent", "success");
      }
    } catch (error) {
      successMessage = false;

      setAlert(error.msg, "danger");
    }
  };
  return (
    <div>
      <Header
        brand={
          <img
            alt="LogoImg"
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
                    <Alerts />
                    <CardFooter className={classes.cardFooter}>
                      <Button type="submit" simple color="primary" size="lg">
                        Send us your message
                      </Button>
                    </CardFooter>
                  </form>   
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};
export default SendMessagePage;
