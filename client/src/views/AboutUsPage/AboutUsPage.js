import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks1 from "components/Header/HeaderLinks1.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import CardHeader from "components/Card/CardHeader.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import profile from "assets/img/faces/christian.jpg";
import profile1 from "assets/img/faces/kendall.jpg";
import profile2 from "assets/img/faces/rania.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { PersonAdd } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function AboutUsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <HeaderLinks
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks1 />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/sushi.jpg")}></Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h2 className={classes.title}>Here is our team</h2>
        </div>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={profile} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Dan Lewis
                  <br />
                  <small className={classes.smallTitle}>Web Developer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Since relocating to Hamburg from England in October 2016, I
                    worked with an events company who provide recruitment
                    services for businesses specifically within the technology
                    and digital arenas. Excited by the buzz these businesses
                    created, motivated to future-proof my career and to become a
                    part of the future of technology, I decided to pursue my
                    interest in this area.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://github.com/dan-lew"
                  >
                    <i className={classes.socials + " fab fa-github"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/dan-lew/"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={profile1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Mahdieh
                  <br />
                  <small className={classes.smallTitle}>Web Developer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Some Text About Mahdia. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Cum ullam minus earum quae
                    dolores blanditiis molestias vero iure rerum vitae eligendi
                    odit aliquam quasi architecto iste corporis sapiente,
                    temporibus magni.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-github"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={profile2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Rania
                  <br />
                  <small className={classes.smallTitle}>Web Developer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Some text about Rania. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dignissimos doloribus error
                    est iusto, qui ipsa enim quod aliquid quia ratione! Aut ut
                    consectetur deserunt, suscipit non eius harum quod maiores.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-github"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
