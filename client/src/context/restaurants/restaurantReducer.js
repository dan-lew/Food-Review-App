import {
    GET_CATRESTAURANT,
    SEARCH_FOOD,
    SET_LOADING,
    RESTAURANT_ERROR
} from '../type';

export default (state , action) => {
    switch(action.type) {
        
        case GET_CATRESTAURANT:
            return{
                ...state,
                loding:false,
                catrestaurants:action.payload
            }

        case SEARCH_FOOD:
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
              
        default:
            return state;
    }
}
