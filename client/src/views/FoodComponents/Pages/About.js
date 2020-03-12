import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CardBody from "components/Card/CardBody";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import Header from "../Layout/Header/Header";
import HeaderLinks from "../Layout/Header/HeaderLinks";
import { makeStyles } from "@material-ui/core/styles";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import Logo from "assets/img/Logo-FR-124.png";

const About = (props) => {
  
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
      <div style={{width:"90%" }} className={classesT.marginCenter}>
      

     <Card style={{ paddingTop: "120px"}} className={classesT.marginCenter} >
     <h2 style={{ paddingLeft: "50px"}} className={classesT.header+ " "+classesT.title}>About Us</h2>
      <GridContainer>
        <GridItem xs={12} sm={5} md={3} lg={3}>
          <Card>
            <CardHeader>Mahdiah</CardHeader>
            <CardBody></CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={5} md={3} lg={3}>
          <Card>
            <CardHeader>Daniel</CardHeader>
            <CardBody></CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={5} md={3} lg={3}>
          <Card>
            <CardHeader>Rania</CardHeader>
            <CardBody></CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      </Card></div>
    </div>
  );
};

export default About;
