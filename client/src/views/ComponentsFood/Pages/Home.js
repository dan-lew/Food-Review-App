import React,{useStyles} from 'react';
//import Carousels from './Carousels'
import SectionCarousel from '../Sections/SectionCarousel'
import RestaurantsList from '../Layout/RestaurantsList'
import { makeStyles } from "@material-ui/core/styles";
//import  Footer from '../../../components/Footer/Footer'
import Header from "../Layout/Header/Header";
import HeaderLinks from "../Layout/Header/HeaderLinks";
import Footer from '../Layout/Footer'
import styles from "assets/jss/material-kit-react/views/components.js";
import Map from '../Layout/Map';


const Home = (props) => {

    const useStyles = makeStyles(styles);

    const classes = useStyles();
    const { ...rest } = props;
    return (

        <div className="">
            <Header
            brand="Food Rating"
            rightLinks={<HeaderLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
            height: 300,
            color: "white"
        }}
        {...rest}
      />
            <div>
           
                <SectionCarousel />
                {/* <Map google={this.props.google} */}
                <Map google={props.google}
					center={{
                        lat: 53.5510846,
                        lng: 9.9936819
                    }}
					height='300px'
					zoom={15}/>
                    
                {/* <Carousels /> */}
            </div>
          
           <div className="">
                <RestaurantsList />
            </div>
            <Footer />
        </div>
    )
}
export default  Home;