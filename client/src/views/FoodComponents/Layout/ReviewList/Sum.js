import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";


export default function Sum(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    
    console.log("props.price: ",props.price)
    let summe=0.00;

    const sum=(props)=>{
        props.forEach(item=>{
            summe+=item;
        })
        console.log("forEach:", summe)
        return summe;
    }
    return (
        <div>
            Sum: {sum(props.price)}      
        </div>
    )
}
