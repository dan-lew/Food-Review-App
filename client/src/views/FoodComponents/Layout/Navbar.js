import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import Header  from 'material-kit-react/src/components/Header/Header.js';
import { Footer } from 'material-kit-react/src/components/Footer/Footer'
import Logo from 'assets/img/Logo-FR-shadow.png';
import stylesN from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import Button from "components/CustomButtons/Button.js";
import avatar from "assets/img/faces/avatar.jpg";
import Avatar from "@material-ui/core/Avatar";
import stylesC from "assets/jss/material-kit-react/views/components.js";
import stylesI from "assets/jss/material-kit-react/imagesStyles.js"


console.log(Logo);

const useStylesN = makeStyles(stylesN);
const useStylesT = makeStyles(stylesT);
const useStylesC = makeStyles(stylesC);
const useStylesI = makeStyles(stylesI);

const Navbar=({title, icon})=> {
    const classesN = useStylesN();
    const classesT = useStylesT();
    const classesC = useStylesC();
    const classesI = useStylesI();


    return (   
   
        <div className={classesN.navbar}>
        
            <img src={Logo} className={classesI.imgRoundedCircle+" "+classesI.imgFluidLogo} />
          <Link to="/">
          <img
           src={Logo}
           className={classesN.img}
           alt="Logo"
           />
          </Link>
          <Avatar alt="User" src={avatar} className={classesC.imgRounded+" "+classes.large} ></Avatar>
           <Button
           justIcon
           round
           href="#pablo"
                    className={classesN.notificationNavLink}
                    onClick={e => e.preventDefault()}
                    buttonText={
                        <img
                          src={Logo}
                          className={classesN.img}
                          alt="Logo"
                        />}>
                  </Button><img 
             className={classesN.img}
            src={Logo} style={{height:"24px"}}/> 
            <h1  style={{fontWeight:"bold"}}>{title}  </h1>
            <ul >
                
                <Link className="text-white" to="/">Home </Link>
                <Link className="text-white" to="/about">About </Link>
                <Link className="text-white" to="/register">Register </Link>
                <Link className="text-white" to="/login">Login </Link>
             
            </ul>
        </div>
    )
}

Navbar.propTypes={
    // img:PropsTypes.object,
    title:PropTypes.string.isRequired,
    icon:PropTypes.string
}
Navbar.defaultProps= {
    // img:{src:{Logo}},
    title:"Hallo",
    icon:"fas fa-utensils"
}

export default Navbar;