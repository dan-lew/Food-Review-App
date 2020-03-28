import React, {useContext} from "react";
import AuthContext from "../../../context/auth/authContext"
import Header from "../Layout/Header/Header.js";
import HeaderLinks from "../Layout/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components";
import UserPr from "../Layout/UserPr";
import Logo from "assets/img/Logo-FR-124.png";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";

const UsersProfile = props => {
  const useStyles = makeStyles(styles);
  const useStylesI = makeStyles(stylesI);
  const classes = useStyles();
  const classesI = useStylesI();
  console.log(classes);
  const { ...rest } = props;

  const authContext = useContext(AuthContext);
  const {
   
    user
  } = authContext;
  console.log("The User =", user);

  return (
    <div className="">
      <div className="">
        <Header
          brand={
            <img alt="LogoImg"
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
      </div>
      <div className={classes.marginAuto}>
        <UserPr />
      </div>
    </div>
  );
};
export default UsersProfile;
