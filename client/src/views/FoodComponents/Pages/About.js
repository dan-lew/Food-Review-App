import React from "react";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CardBody from "components/Card/CardBody";
import Card from "components/Card/Card";
import CardFooter from "components/Card/CardFooter";
import CardHeader from "components/Card/CardHeader";
import Header from "../Layout/Header/Header";
import HeaderLinks from "../Layout/Header/HeaderLinks";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/cardStyle";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import Logo from "assets/img/Logo-FR-124.png";
import profile from "assets/img/faces/dans.png";
import profile1 from "assets/img/faces/mahdieh.jpg";
import profile2 from "assets/img/faces/rania.jpg";

const About = props => {
  const useStylesT = makeStyles(stylesT);
  const useStylesI = makeStyles(stylesI);
  const classesT = useStylesT();
  const classesI = useStylesI();
  console.log(classesT);

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const imageClasses = classNames(
    classesI.imgRaised,
    classesI.imgRoundedCircle,
    classesI.imgFluid
  );
  const { ...rest } = props;

  return (
    <div className="">
      <div className="">
        <Header
          brand={
            <img
              alt="LogoImg"
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
      <div style={{ width: "90%" }} className={classesT.marginCenter}>
        <Card style={{ paddingTop: "120px" }} className={classesT.marginCenter}>
          <h2
            style={{ paddingLeft: "50px" }}
            className={classesT.header + " " + classesT.title}
          >
            About Us
          </h2>
          <GridContainer>
            <GridItem xs={12} sm={6} md={4} lg={4}>
              <Card style={{ textAlign: "center", height: "740px" }}>
                <CardHeader color="primary" className={classes.cardHeader}>
                <h4 style={{fontWeight:"bolder"}}>Mahdieh</h4>
                </CardHeader>
                <CardBody>
                  <img src={profile1} alt="..." className={imageClasses} />
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <p
                      style={{ textAlign: "justify", paddingTop: "20px" }}
                      className={classesT.quoteAuthor}
                    >
                      <h3
                        style={{ textAlign: "center" }}
                        className={classesT.mutedText}
                      >
                        Web Developer
                      </h3>
                      After teaching mathematics and basic programming to
                      schools in Iran, I decided to further my knowledge in IT
                      so in 2005, I started studying computer science. A keen
                      traveller, I studied in India and Sweeden before settling
                      in Germany. Since 2014, I gained experience as a
                      programmer in a variety of roles within the electronics
                      industry. I decided to further my career within the IT
                      industry so I joined DCI to build my skills as a web
                      developer.
                    </p>
                  </GridItem>
                </CardBody>
                <CardFooter
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Button
                    justIcon
                    color="transparent"
                    className={classesT.margin5}
                    href="https://github.com/mahdieh019"
                  >
                    <i className={classesT.socials + " fab fa-github"} />
                  </Button>
                  <Button
                    justIcon
                    href="https://www.linkedin.com/in/mahdieh-nasrabadi-a50b7119b/"
                    color="transparent"
                    className={classesT.margin5}
                  >
                    <i className={classesT.socials + " fab fa-linkedin"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classesT.margin5}
                    href="https://www.xing.com/profile/Mahdieh_Nasrabadi/cv"
                  >
                    <i className={classesT.socials + " fab fa-xing"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={6} md={4} lg={4}>
              <Card style={{ textAlign: "center", height: "740px" }}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4 style={{fontWeight:"bolder"}}>Daniel</h4>
                </CardHeader>
                <CardBody>
                  <img src={profile} alt="..." className={imageClasses} />
                  <GridItem
                    style={{ textAlign: "justify", paddingTop: "20px" }}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <h3
                      style={{ textAlign: "center" }}
                      className={classesT.mutedText}
                    >
                      Web Developer
                    </h3>
                    <p className={classesT.description}>
                      Since relocating to Hamburg from England in October 2016,
                      I worked with an events company who provide recruitment
                      services for businesses specifically within the technology
                      and digital arenas. Excited by the buzz these businesses
                      created, motivated to future-proof my career and to become
                      a part of the future of technology, I decided to pursue my
                      interest in this area.
                    </p>
                  </GridItem>
                </CardBody>
                <CardFooter
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Button
                    justIcon
                    color="transparent"
                    className={classesT.margin5}
                    href="https://github.com/dan-lew"
                  >
                    <i className={classesT.socials + " fab fa-github"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classesT.margin5}
                    href="https://www.linkedin.com/in/dan-lew/"
                  >
                    <i className={classesT.socials + " fab fa-linkedin"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classesT.margin5}
                    href="https://www.xing.com/profile/Dan_Lewis4/cv"
                  >
                    <i className={classesT.socials + " fab fa-xing"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={4}>
              <Card style={{ textAlign: "center", height: "740px" }}>
                <CardHeader color="primary" className={classes.cardHeader}>
                <h4 style={{fontWeight:"bolder"}}>Rania</h4>
                </CardHeader>
                <CardBody>
                  <img src={profile2} alt="..." className={imageClasses} />
                  <GridItem
                    style={{ paddingTop: "20px", textAlign: "justify" }}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <h3
                      style={{ textAlign: "center" }}
                      className={classesT.mutedText}
                    >
                      Webdeveloper
                    </h3>
                    <p className={classesT.description}>
                      26 years ago I relocated from Uzbekistan to Germany and in
                      2001, I started a new journey into IT. I started studying
                      computer science and have since built up experience within
                      the IT industry. I have continuously learned, improved and
                      worked on my acquired knowledge in various new
                      technologies. Now, I am keen to pursue my career as a web
                      developer within the technology industry.
                    </p>
                  </GridItem>
                </CardBody>
                <CardFooter
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Button
                    justIcon
                    color="transparent"
                    className={classesT.margin5}
                    href="https://github.com/raniaw"
                  >
                    <i className={classesT.socials + " fab fa-github"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classesT.margin5}
                    href="https://linkedin.com/in/rania-wittenberg-45657692"
                  >
                    <i className={classesT.socials + " fab fa-linkedin"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classesT.margin5}
                    href="https://www.xing.com/profile/rania_wittenberg/cv"
                  >
                    <i className={classesT.socials + " fab fa-xing"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </Card>
      </div>
    </div>
  );
};

export default About;
