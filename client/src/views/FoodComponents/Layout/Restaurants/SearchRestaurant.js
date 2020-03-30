import React, { Fragment, useContext, useEffect, useState } from "react";
//import classBut from 'src/assets/jss/material-kit-react/components/buttonStyle.js'
import { Link} from "react-router-dom";
import Button from "components/CustomButtons/Button";
import LocationOn from "@material-ui/icons/LocationOn";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AlertContext from "context/alert/alertContext";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput.js";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import stylesT from "assets/jss/material-kit-react/components/typographyStyle.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import RestaurantContext from '../../../../context/restaurants/restaurantContext'


const  SearchRestaurant=()=> {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const useStylesT = makeStyles(stylesT);
  const classesT = useStylesT();

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const restaurantContext = useContext(RestaurantContext);
  const {getCatRestaurant, catrestaurants,searchFood} = restaurantContext;
  
  let listCategory = ["Italian", "Indian", "Asian","Iranian", "Greek", "Thai","Mediterranean"];

  const getAllRestaurant=(value)=>{
    getCatRestaurant(value)
    console.log(value)
  }
  const state = {
    category: listCategory
  };

  let btnS = [];
  btnS.push(state.category);

 //-------------------------------------------------------

  const [sendFood,setFood]=useState({ food:'',city:'' });
  const {food,city}=sendFood;

  const onChange=(e)=>{
    setFood({ ...sendFood, [e.target.name]:e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
      let alert = " Please complete all the fields";
      try{
        if(food === '' || city === '' ){
          setAlert(alert,'danger')
        }   
        else {
          searchFood(sendFood.food,sendFood.city);
          console.log(sendFood.food,sendFood.city);
          console.log(catrestaurants)
            // setFood('');
        }
      }
      catch(error){
        setAlert(error.msg, 'danger')

      }
    }

  return (
    <div>
      <h3>Choose your cuisine... </h3>

      <GridContainer>
        <GridItem xs={10} sm={10} md={10} lg={10}>
          {btnS[0].map((value, index) => {
            return (
              <Fragment key={index}>
                <Link
                  onClick={() => {
                    getAllRestaurant(value);
                  }}
                  id="link"
                  className={classesT.primaryText + " " + classesT.restaurant}
                  key={index}
                  to={`/welcome-user/${value}`}
                >
                  {" "}
                  {value}{<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                </Link>
              </Fragment>
            );
          })}
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <form onSubmit={onSubmit} className={classes.form}>
            <GridItem xs={12} sm={8} md={6} lg={6}>
              <CustomInput 
                  onChangeFunction={onChange}
                  labelText="Search for food"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    name: "food",
                    type: "text",
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={8} md={6} lg={6}>
                <CustomInput
                  onChangeFunction={onChange}
                  labelText="City"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    name: "city",
                    type: "text",
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </GridItem>
            <Button color="primary" size="sm" type="submit"> Search </Button>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
};
export default SearchRestaurant;
