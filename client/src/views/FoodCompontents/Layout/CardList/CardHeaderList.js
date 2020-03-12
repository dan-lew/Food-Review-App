import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import avatar from "assets/img/faces/avatar.jpg";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";

export default function CardHeaderList(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    console.log(classes)
    const { ...rest } = props;
    return (
        <div>
            <Avatar alt="User" src={avatar} className={classes.imgRounded+" "+classes.large} ></Avatar>
            <h4>Restaurant<br></br>Food Rating<StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon />  </h4>
        </div>
    )
}
