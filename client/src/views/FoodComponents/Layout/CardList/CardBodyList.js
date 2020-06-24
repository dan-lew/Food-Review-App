import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components";

export default function CardBodyList(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return <div>{props.comment}</div>;
}
