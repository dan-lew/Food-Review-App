import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";



export default function ListFoodsReview(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    console.log(classes)
    const { ...rest } = props;

    return (
        <div>
            <p> List of Foods reviewed</p>
        </div>
    )
}
