import React, { Fragment, useContext, useEffect, useState } from "react";
//import classBut from 'src/assets/jss/material-kit-react/components/buttonStyle.js'
import { Link, Switch, Route,NavLink,Redirect } from "react-router-dom";
import Button from "components/CustomButtons/Button";
import LocationOn from "@material-ui/icons/LocationOn";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
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
  
  let listCategory = ["Italian", "Indian", "Asian","Iranian", "Greek", "Thai","American","Mediterranean"];

  const getAllRestaurant=(value)=>{

    getCatRestaurant(value)
    console.log(value)
    setFood({ food:'',city:'' })
  }
  const state = {
    category: listCategory
  };

  let btnS = [];
  btnS.push(state.category);

 //-------------------------------------------------------
  const [redirect,setRedirect] = useState(null)
  const [sendFood,setFood]=useState({ food:'',city:'' });
  const {food,city}=sendFood;

  const onChange=(e)=>{
    setFood({ ...sendFood, [e.target.name]:e.target.value})
    
    
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await setRedirect(null)
    await setRedirect(<Redirect to="/welcome-user"/>)
      let alert = " Please complete all the fields";
      try{
        if(food === '' || city === '' ){
          setAlert(alert,'danger')
        }   
        else {
          console.log(sendFood)
          searchFood(sendFood.food,sendFood.city);
          
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
      {redirect}
      <GridContainer>
        <GridItem xs={10} sm={10} md={12} lg={12}>
          {btnS[0].map((value, index) => {
            return (
              <Fragment key={index}>
                <NavLink  
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#61DAFB"
                  }}
                  onClick={()=>{getAllRestaurant(value)}}
                  id="link"
                  className={classesT.primaryText + " " + classesT.restaurant}
                  key={index}
                  to={`/welcome-user/${value}`}
                >
                  {" "}
                  {value}{<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                </NavLink>
              </Fragment>
            );
          })}
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <form onSubmit={onSubmit} className={classes.form}>
          <GridContainer xs={12} sm={12} md={12} lg={12}>
            <GridItem xs={12} sm={8} md={6} lg={6}>
              <CustomInput 
                  onChangeFunction={onChange}
                  labelText="Food"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    name: "food",
                    type: "text",
                    value: food,
                    endAdornment: (
                      <InputAdornment position="end">
                        <LocalDiningIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </GridItem>
              <GridItem xs={10} sm={10} md={6} lg={6}>
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
                    value: city,
                    endAdornment: (
                      <InputAdornment position="end">
                      <LocationOn />
                      </InputAdornment>
                    )
                  }}
                />
              </GridItem>
              </GridContainer>
                <Button color="primary" size="sm" type="submit"> Search </Button>
            
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
};
export default SearchRestaurant;