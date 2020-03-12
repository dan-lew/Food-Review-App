import React, { useStyles } from "react";
//import Carousels from './Carousels'
// import Map from "../Layout/MapR";
// import MapMarkers from "../Layout/MapMarkers";
// import Places from "../Layout/Places";
import SectionCarousel from "../Sections/SectionCarousel";
import RestaurantsList from "../Layout/Restaurants/RestaurantsList";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header/Header";
import HeaderLinks from "../Layout/Header/HeaderLinks";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from 'components/Card/Card';
import { makeStyles } from "@material-ui/core/styles";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import Logo from "assets/img/Logo-FR-124.png";

const Home = props => {
  const useStylesT = makeStyles(stylesT);
  const useStylesI = makeStyles(stylesI);
  const classesT = useStylesT();
  const classesI = useStylesI();
  console.log(classesT);
  const { ...rest } = props;

  return (
    <div className="">
      <div className="">
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
      
      <div style={{ paddingTop: "80px",width:"90%" }} className={classesT.marginCenter}>
     <Card className={classesT.marginCenter} >
        <SectionCarousel />
        {/* <Map google={this.props.google} */}
        {/* <Map
          google={props.google}
          center={{
            lat: 53.5510846,
            lng: 9.9936819
          }}
          height="300px"
          zoom={15}
        /> */}

        {/* <Carousels /> */}
     
      <div>{/* <Places />   */}</div>
      <br></br>
      <br></br>
      <div className="" style={{ height: "100vh" }}>
        <GridContainer className={classesT.marginCenter}>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            {/* <MapMarkers/> */}
            {/* <RestaurantsList /> */}
          </GridItem>
        </GridContainer>
        
      </div>
      </Card> </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Home;
