import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";



export default function ListRestaurantsReview(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    console.log(classes)
    const { ...rest } = props;

    return (
        <div>
            <p> List of Restaurants reviewed</p>
        </div>
    )
}