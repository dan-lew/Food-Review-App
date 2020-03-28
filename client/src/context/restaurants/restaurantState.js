import React, { useReducer } from 'react';
import axios from 'axios';
import RestaurantContext from './restaurantContext';
import RestaurantReducer from './restaurantReducer';
import {
    GET_RESTAURANTS,
    // SEARCH_FOOD,
    RESTAURANT_ERROR,
    SET_LOADING,
    GET_RESTAURANT,
    GET_CATRESTAURANT
} from '../type';

const RestaurantState = props => {
    const initialState = {
        restaurants:[],
        restaurant:{},
        catrestaurants:[],
        filtered:[],
        error:null,
        loading:false
    };


const [state , dispatch ] = useReducer (RestaurantReducer , initialState);

// GET List of RESTAURANTS
    const getRestaurants = async () => {
        setLoading();
        try {
            const res = await axios.get('/api/restaurant');
            dispatch({
                type:GET_RESTAURANTS,
                payload:res.data
            });
            
        } catch (error) {
            dispatch({
                type : RESTAURANT_ERROR,
                payload : error.response.msg
            });
        }
    }

    
   //Get a RESTAURANTS category
   const getCatRestaurant = async (restaurantcategory) => {
    setLoading();
    let data={
        category:restaurantcategory
    }; 
      const res=await axios
      .post('/api/restaurant/category',data);
      
       dispatch({
           type:GET_CATRESTAURANT,
           payload:res.data
       });
   }

   //Get a RESTAURANT
   const getRestaurant=async(restaurantname)=>{
    setLoading();
      const res=await axios
      .get('/api/restaurant');
      
       dispatch({
           type:GET_RESTAURANT,
           payload:res.data
       });
     }
    //set Loading
    const setLoading=()=>dispatch({type:SET_LOADING})

    return (
        <RestaurantContext.Provider
            value={{
                restaurants: state.restaurants,
                catrestaurants: state.catrestaurants,
                filtered: state.filtered,
                error:state.error,
                loading:state.loading,
                getRestaurants,
                getRestaurant,
                getCatRestaurant
            }}
        >
        {props.children}

        </RestaurantContext.Provider>
    )

}
export default RestaurantState

