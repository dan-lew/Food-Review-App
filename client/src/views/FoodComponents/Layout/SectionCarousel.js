import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import image1 from "assets/img/food/chinesisch-1200-400.png";
import image2 from "assets/img/food/coffee-1200-400.png";
import image3 from "assets/img/food/food1-1200-400.png";
import image4 from "assets/img/food/food2-1200-400.png";
import image5 from "assets/img/food/food3-1200-400.png";
import image6 from "assets/img/food/food4-1200-400.png";
import image7 from "assets/img/food/food5-1200-400.png";
import image8 from "assets/img/food/food6-1200-400.png";
import image9 from "assets/img/food/food7-1200-400.png";
import image10 from "assets/img/food/food8-1200-400.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

import MapContainer from "../../MapContainers/MapContainer.js";

import "../../../App.css";
import stylesC from "assets/jss/material-kit-react/views/components.js";
import "antd/dist/antd.css";

const useStylesC = makeStyles(stylesC);
const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const classesC = useStylesC();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={image4} alt="Forth slide" className="slick-image" />
                </div>
                <div>
                  <img src={image5} alt="Fifth slide" className="slick-image" />
                </div>
                <div>
                  <img src={image6} alt="Sixth slide" className="slick-image" />
                </div>
                <div>
                  <img
                    src={image7} alt="Seventh slide"     
                    className="slick-image"
                  />
                </div>
                <div>
                  <img src={image8} alt="Eigth slide" className="slick-image" />
                </div>
                <div>
                  <img src={image9} alt="Neun slide" className="slick-image" />
                </div>
                <div>
                  <img src={image10} alt="Ten slide" className="slick-image" />
                </div>
              </Carousel>
           
            </Card>
            
            <Card>
              <MapContainer />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
