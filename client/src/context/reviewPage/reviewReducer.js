import {
  ADD_REVIEW,
  GET_REVIEWS,
  REVIEWS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  FILTER_REVIEW,
  CLEAR_FILTER
  // SET_ALERT,
  // REMOVE_ALERT
} from "../type";

export default (state, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        loading: false
      };
    case REVIEWS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload]
      };
    case FILTER_REVIEW:
      return {
        ...state,
        reviews:  action.payload,
        loading: false
      };
    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(item => item.id !== action.payload)
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
      };

    case CLEAR_FILTER:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
