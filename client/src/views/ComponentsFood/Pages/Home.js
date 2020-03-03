import React,{useStyles} from 'react';
//import Carousels from './Carousels'
import SectionCarousel from '../Sections/SectionCarousel'
import RestaurantsList from '../Layout/Restaurants/RestaurantsList'
import { makeStyles } from "@material-ui/core/styles";
//import  Footer from '../../../components/Footer/Footer'
import Header from "../Layout/Header/Header";
import HeaderLinks from "../Layout/Header/HeaderLinks";
import Footer from '../Layout/Footer'
import styles from "assets/jss/material-kit-react/views/components.js";
import Map from '../Layout/MapR';
import MapMarkers from '../Layout/MapMarkers';
import Places from '../Layout/Places';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";



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
            <div className="container">
            
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
          <div>

          {/* <Places />   */}
          
          </div>
          <br></br><br></br>
            <div className="" style={{height:'100vh'}}>
                <GridContainer  justify="center" >
                    <GridItem  xs={12} sm={12} md={12} lg={12}>
                    <MapMarkers/>
                {/* <RestaurantsList /> */}
                    </GridItem>
                </GridContainer>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
export default  Home;