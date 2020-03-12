import { container, title } from "assets/jss/material-kit-react.js";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

const basicsStyle = {
  sections: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  socialIcons: {  
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px"
  },
  marginAuto:{
    marginAuto:"auto"
  },
  marginRight5:{
    marginAuto:"5px"
  },
  width100:{
    width:"100vw",
    height:"50vw"
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
