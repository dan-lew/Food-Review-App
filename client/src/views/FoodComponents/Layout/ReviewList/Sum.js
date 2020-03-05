import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";


export default function Sum(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    console.log(classes)
    return (
        <div>
            Sum:       
        </div>
    )
}
