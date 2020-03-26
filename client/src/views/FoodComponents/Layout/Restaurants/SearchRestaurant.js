import React, { Fragment, useContext, useEffect, useState } from "react";
//import classBut from 'src/assets/jss/material-kit-react/components/buttonStyle.js'
import { Link, Switch, Route } from "react-router-dom";
import Button from "components/CustomButtons/Button";
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
import axios from 'axios'
import RestaurantContext from '../../../../context/restaurants/restaurantContext'

const  SearchRestaurant=(props)=> {

//   onst [text,setText]=useState('');
//   const onChange=(e)=>setText( e.target.value);

//   const onSubmit=(e)=>{
//     e.preventDefault();
//     if(text===''){
//     alertContext.setAlert('Please enter something','light');
//     }else{
//     githubContext.searchFood(text);
//         setText('')
//     }
// }


  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const useStylesT = makeStyles(stylesT);
  const classesT = useStylesT();
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;


// Restaurants list
const restaurantContext = useContext(RestaurantContext);
const { restaurants,filtered,error,getCatRestaurant, catrestaurants } = restaurantContext;

const getAllRestaurant=(value)=>{
  getCatRestaurant(value)
  console.log(value)
}
console.log(catrestaurants)


  const state = {
    category: props.category
  };
  console.log(state);
  const { ...rest } = state;
  const [sendFood, setFood] = useState({
    food: "",
    restaurant:""
  });
  const { food,city } = sendFood;

  const onChange = e => {
    console.log("input food: ",e.target.name);
    setFood({ ...sendFood, [e.target.name]: e.target.value });
    console.log("sendFood: ",sendFood)
  };
    

  let btnS = [];
  btnS.push(state.category);

  useEffect(() => {
    //createBtnS();
  });
 
  const searchFood = e => {
    e.preventDefault();

    if (food === "") {
      setAlert("please complete this field", "danger");
    } else {
      props.searchFunction(food)
    }
    console.log("searchFood", food);
  };

  return (
    <div>
      <h3>Choose your cuisine... </h3>

      <GridContainer>
        <GridItem>
          {btnS[0].map((value, index) => {
            // console.log(value);
            // console.log(index, value);
            return (
              <Fragment key={index}>
                <Link 
                  onClick={()=>{getAllRestaurant(value)}}
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
          <form onSubmit={searchFood} className={classes.form}>
            <GridItem xs={12} sm={12} md={8} lg={8}>
          <CustomInput 
              onChange={onChange}
              labelText="Search for food"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: onChange,
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
            <GridItem xs={12} sm={12} md={8} lg={8}>
            <CustomInput
              onChange={onChange}
              labelText="City"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: onChange,
                name: "city",
                type: "text",
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            /></GridItem>
            <Button color="primary" size="sm" type="submit"> Search </Button>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
export default SearchRestaurant