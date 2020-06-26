import {
  GET_CATRESTAURANT,
  SEARCH_FOOD,
  SET_LOADING,
  RESTAURANT_ERROR,
  GET_RESTAURANT,
  GET_CATEGORY,
} from "../type";

export default (state, action) => {
  switch (action.type) {
    case GET_RESTAURANT:
      return {
        ...state,
        loading: false,
        getRestaurant: action.payload,
      };

    case GET_CATRESTAURANT:
      return {
        ...state,
        loding: false,
        catrestaurants: action.payload,
      };

    case SEARCH_FOOD:
      return {
        ...state,
        catrestaurants: action.payload,
        loading: false,
      };

    case RESTAURANT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};
