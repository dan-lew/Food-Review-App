import React, { useReducer } from "react";
import axios from "axios";
import RestaurantContext from "./restaurantContext";
import RestaurantReducer from "./restaurantReducer";
import {
  GET_CATRESTAURANT,
  SEARCH_FOOD,
  SET_LOADING,
  RESTAURANT_ERROR,
  GET_RESTAURANT,
  GET_CATEGORY,
} from "../type";
import { AddBoxOutlined } from "@material-ui/icons";

const RestaurantState = (props) => {
  const initialState = {
    getRestaurant: {},
    restaurant: {},
    catrestaurants: [],
    categories: [],
    filtered: [],
    error: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(RestaurantReducer, initialState);
  //Get restaurant list
  const getRestaurantNames = async () => {
    const res = await axios.get("/api/restaurant/getRestaurant");
    dispatch({
      type: GET_RESTAURANT,
      payload: res.data,
    });
  };

  const getCategory = async () => {
    const res = await axios.get("/api/restaurant/getCuisine");
    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    });
  };

  //Get a RESTAURANTS category
  const getCatRestaurant = async (restaurantcategory) => {
    ///async (restaurantcategory,city)
    setLoading();
    let data = {
      category: restaurantcategory,
      // city:city
    };
    const res = await axios.post("/api/restaurant/category", data);

    dispatch({
      type: GET_CATRESTAURANT,
      payload: res.data,
    });
  };

  // Search for Food
  const searchFood = async (name, city) => {
    setLoading();
    let data = {
      nameOfDish: name,
      city: city,
    };
    console.log("data: ", data);
    try {
      const res = await axios.post("/api/restaurant/getrestaurantfood", data);
      dispatch({
        type: SEARCH_FOOD,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: RESTAURANT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  //Get a RESTAURANT
  //    const getRestaurant=async(restaurantname)=>{
  //     setLoading();
  //       const res=await axios
  //       .get('/api/restaurant');

  //        dispatch({
  //            type:GET_RESTAURANT,
  //            payload:res.data
  //        });
  //      }
  //set Loading

  return (
    <RestaurantContext.Provider
      value={{
        getRestaurant: state.getRestaurant,
        categories : state.categories,
        restaurants: state.restaurants,
        catrestaurants: state.catrestaurants,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        getCategory,
        getRestaurantNames,
        searchFood,
        getCatRestaurant,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};
export default RestaurantState;
