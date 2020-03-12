import React,{useStyles} from 'react'
import HeaderLogin from "../Layout/HeaderLogin/HeaderLogin.js.js";
import HeaderLinksUser from "../Layout/HeaderLogin/HeaderLinksUser.js.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import UserPr from '../Layout/UserPr'
//import stylesM from '../../../assets/jss/material-kit-react.js'


const UsersProfile = (props) =>{

    const useStyles = makeStyles(styles);
   // const useStylesM =makeStyles(stylesM)
    const classes = useStyles();
    // const classesM =useStylesM();
     console.log(classes)
    const { ...rest } = props;
    return (
        <div className="">
            <div className="">  
                <HeaderLogin
                    brand="Food Rating"
                    rightLinks={<HeaderLinksUser />}
                    fixed
                    color="dark"
                    changeColorOnScroll={{
                    height: 300,    
                    color: "white"
                }}
                {...rest}
            />
            </div>
            <div className={classes.marginAuto}>
               <UserPr />
            </div>
    

           </div>
         
    
    )
}
export default UsersProfile

