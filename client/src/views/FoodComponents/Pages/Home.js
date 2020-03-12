import React, { useStyles } from "react";
//import Carousels from './Carousels'
import SectionCarousel from "../Sections/SectionCarousel";
import RestaurantsList from "../Layout/Restaurants/RestaurantsList";
import { makeStyles } from "@material-ui/core/styles";
//import  Footer from '../../../components/Footer/Footer'
import Header from "../Layout/Header/Header";
import HeaderRights from "../Layout/Header/HeaderRights";
import HeaderLinks from "../Layout/Header/HeaderLinks";
import Footer from "../Layout/Footer";
import styles from "assets/jss/material-kit-react/views/components.js";
import Map from "../Layout/MapR";
import MapMarkers from "../Layout/MapMarkers";
import Places from "../Layout/Places";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Logo70 from "assets/img/Logo-FR-70.png";
import Logo from "assets/img/Logo-FR-124.png";

import stylesI from "assets/jss/material-kit-react/imagesStyles.js";

const Home = props => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const useStylesI = makeStyles(stylesI);
  const classesI = useStylesI();
  console.log(Logo);
  const { ...rest } = props;
  return (
    <div className="">
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
      </div>
      <div style={{ paddingTop: "80px" }}>
        <SectionCarousel />
       
      </div>
      <br></br>
      <br></br>
      <div className="" style={{ height: "100vh" }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={12}>
          
          </GridItem>
        </GridContainer>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Home;
