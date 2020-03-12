import React, { useStyles } from "react";
import HeaderLogin from "../Layout/HeaderLogin/HeaderLogin.js";
import HeaderLinksUser from "../Layout/HeaderLogin/HeaderLinksUser.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import WelUser from "../Layout/WelUser";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
//import stylesM from '../../../assets/jss/material-kit-react.js'
import Logo from "assets/img/Logo-FR-124.png";
//import HeaderRights from "../Layout/Header/HeaderRights";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";

export default function WelcomeUser(props) {
  const useStyles = makeStyles(styles);
  const useStylesI = makeStyles(stylesI);
  const classes = useStyles();
  const classesI = useStylesI();
  const { ...rest } = props;

  return (
    <div className="">
      <div className="">
        <HeaderLogin
          brand={
            <img
              className={
                classesI.imgRoundedCircle + " " + classesI.imgFluidLogo
              }
              src={Logo}
            />
          }
          rightLinks={<HeaderLinksUser />}
          fixed
          color="dark"
          changeColorOnScroll={{
            height: 100,
            color: "white"
          }}
          {...rest}
        />
      </div>
      <div  className={classes.marginAuto}>
        <WelUser />
      </div>
    </div>
  );
}
