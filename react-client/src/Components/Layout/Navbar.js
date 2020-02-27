import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import Header  from 'material-kit-react/src/components/Header/Header.js';
//import { Footer } from 'material-kit-react/src/components/Footer/Footer'

const Navbar=({title, icon})=> {
    return (   
   
        <div className="navbar bg-primary">
            <h1> <i className={icon} text-white></i>  {title}  </h1>
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
    title:PropTypes.string.isRequired,
    icon:PropTypes.string
}
Navbar.defaultProps= {
    title:"Food rating",
    icon:"fas fa-utensils"
}

export default Navbar;