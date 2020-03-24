import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

//import styles from "assets/jss/material-kit-react/views/components.js";
import styles from "assets/jss/material-kit-react/views/components";

export default function CardBodyList(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    console.log(classes)
    // const { ...rest } = props;

    return (
        <div>
            <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
        </div>
    )
}
