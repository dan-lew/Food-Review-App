import React from "react";
import { Icon, Slider } from "antd/lib";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import stylesN from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
// import Slider from "nouislider";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

// import 'antd/dist/antd.css';
// import { Slider } from 'antd/lib/slider';
// import { Icon} from 'antd/lib/icon';

const ConstraintSlider = ({ iconType, value, onChange, text }) => {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem className={classes.marginAuto}>
 
        <Slider
     
          className=""
          value={value}
          min={0}
          max={60}
          onChange={onChange}
        />
      </GridItem>
      <GridItem className={classes.marginAuto}>
        <i
          className={
            classes.socialIcons + " " + classes.marginRight5 + " fab fa-car"
          }
        />{" "}
        <span style={{ textAlign: "center" }} className="">
          {text}
        </span>
      </GridItem>
    </GridContainer>

    // <section className="d-flex flex-column" >
    //   <div className="d-flex w-100 align-items-center">
    // <i className={ classes.socialIcons + " " + classes.marginRight5 + " fab fa-twitter"}/>{" "}
    //     {/* <Icon className="font-1-5 mr-4" type={iconType} /> */}
    //     <Slider className="w-100" value={value} min={0} max={60} onChange={onChange} />
    //   </div>
    //   <span className="text-center">{text}</span>
    // </section>
  );
};

export default ConstraintSlider;
