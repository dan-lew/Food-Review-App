import {
    GET_RESTAURANTS,
    RESTAURANT_ERROR,
    SEARCH_FOOD,
    SET_LOADING,
    GET_CATRESTAURANT
} from '../type';

export default (state , action) => {
    switch(action.type) {

        case SEARCH_FOOD:
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload,
                loading:false
            }

        case RESTAURANT_ERROR : 
            return {
                ...state,
                error:action.payload
            }   
        case SET_LOADING:
            return{
                ...state,
                loading:true
            }  
        case GET_CATRESTAURANT:
            return{
                ...state,
                loding:false,
                catrestaurants:action.payload
            }       
        default:
            return state;
    }
}
