import {
  ADD_REVIEW,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  FILTER_REVIEW,
  CLEAR_FILTER,
  // SET_ALERT,
  // REMOVE_ALERT
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload]
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
    case FILTER_REVIEW:
      return {
        ...state,
        filtered: state.reviews.filter(review => {
          const regx = new RegExp(`${action.payload}`, "gi"); // (g)global and (i)caseInsensitive
          return review.name.match(regx) || review.email.match(regx) || review.phone.match(regx);
        })
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