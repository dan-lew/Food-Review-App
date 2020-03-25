import React from "react";
import { Slider } from "antd";
import { CarTwoTone } from "@ant-design/icons";
import { MuiThemeProvider } from "material-ui";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const ConstraintSlider = ({ iconType, value, onChange, text }) => {
  const muiTheme = getMuiTheme({
    slider: {
      trackColor: "yellow",
      selectionColor: "red"
    }
  });
console.log(muiTheme.slider)
  return (
    <section className="">
      <div className="">
        {/* <Icon className="" type={iconType} /> */}
        <CarTwoTone style={{ fontSize: "25px" }} twoToneColor="#9c27b0" />
        <MuiThemeProvider muiTheme={muiTheme}>
          <Slider
            className=""
            value={value}
            min={0}
            max={60}
            onChange={onChange}
          />
        </MuiThemeProvider>
      </div>
      <span className="text-center">{text}</span>
    </section>
  );
};

export default ConstraintSlider;
