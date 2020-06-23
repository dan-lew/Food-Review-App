import {
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/material-kit-react.js";

const typographyStyle = {
  defaultFontStyle: {
    ...defaultFont,
    fontSize: "14px"
  },
  // edit
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  defaultHeaderMargins: {
    //marginTop: "20px",
    // edit
    marginTop: "15px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee"
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: "#777"
  },
  mutedText: {
    color: "#777"
  },
  primaryText: {
    color: primaryColor
  },
  infoText: {
    color: infoColor
  },
  successText: {
    color: successColor
  },
  warningText: {
    color: warningColor
  },
  dangerText: {
    color: dangerColor
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#777"
  },
  link:{
    textTransform:"uppercase"
  },
  restaurant:{
    fontSize:"16px",
    fontWeight: "bold",
    paddingRight: "25px",
    margin: "0 auto"
  }
};

export default typographyStyle;
