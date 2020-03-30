import React, { useReducer } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import reviewReducer from "./reviewReducer";
import reviewContext from "./reviewContext";
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
// import restaurantContext from "context/restaurants/restaurants/restaurantContext";

const ReviewState = props => {
  const initialState = {
    reviews: null,
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(reviewReducer, initialState);

  const getReviews = async () => {
    try {
      const res = await axios.get("/api/reviews/userReviews");
      dispatch({
        type: GET_REVIEWS,
        payload: res.data
      });
    } catch (error) {
      dispatch({ type: REVIEWS_ERROR, payload: error.message });
    }
  };
  const addReview = review => {
    review.id = uuid.v4();
    dispatch({ type: ADD_REVIEW, payload: review });
  };

  const updateReview = review => {
    dispatch({ type: UPDATE_REVIEW, payload: review });
  };

  const deleteReview = id => {
    dispatch({ type: DELETE_REVIEW, payload: id });
  };

  const setCurrent = review => {
    dispatch({ type: SET_CURRENT, payload: review });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const filterReviews = text => {
    dispatch({ type: FILTER_REVIEW, payload: text });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  // Set Alert
  // Remove Alert

  return (
    <reviewContext.Provider
      value={{
        reviews: state.reviews,
        current: state.current,
        addReview,
        getReviews,
        deleteReview,
        setCurrent,
        clearCurrent,
        updateReview,
        filterReviews,
        clearFilter,
        filtered: state.filtered
      }}
    >
      {props.children}
    </reviewContext.Provider>
  );
};

export default ReviewState;
