import React from "react";
import SectionCarousel from "../Layout/SectionCarousel";
import Header from "../Layout/Header/Header";
import HeaderLinks from "../Layout/Header/HeaderLinks";
import Card from "components/Card/Card";
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

      <div
        style={{ paddingTop: "80px", width: "90%" }}
        className={classesT.marginCenter}
      >
        <Card className={classesT.marginCenter}>
          <SectionCarousel />
        </Card>
      </div>
    </div>
  );
};
export default Home;
