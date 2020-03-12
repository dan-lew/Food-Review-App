import React from 'react';
import 'antd/dist/antd.css';
import { Icon } from 'antd/lib/icon';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);
const MapMarker = (({ name, key }) => {
  const classes = useStyles();
  return (
    <div key={key}>
      <span className="">{name}</span>
      <Icon className="" type="environment" theme="twoTone" twoToneColor="#fd0000" />
    </div>
  );
});

export default MapMarker;
