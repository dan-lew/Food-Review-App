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
  FILTER_REVIEW_CATEGORY,
  CLEAR_FILTER,
  SET_LOADING,
  // SET_ALERT,
  // REMOVE_ALERT
} from "../type";
// import restaurantContext from "context/restaurants/restaurants/restaurantContext";

const ReviewState = (props) => {
  const initialState = {
    reviews: null,
    current: null,
    filtered: null,
    reviewsCategory:[]
  };
  const [state, dispatch] = useReducer(reviewReducer, initialState);

  const getReviews = async () => {
    try {
      const res = await axios.get("/api/reviews/userReviews");
      dispatch({
        type: GET_REVIEWS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: REVIEWS_ERROR, payload: error.message });
    }
  };

  // Register Review
  const registerReview = async formData => {
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    try {
      const res = await axios.post("/api/reviews/review", formData, config);
      
      dispatch({
        type:   ADD_REVIEW,
        payload: res.data
      });
      
    } catch (error) {
      dispatch({
        type: REVIEWS_ERROR,
        payload: error.response.data.msg
      });
    }
  };

  const addReview = (review) => {
    review.id = uuid.v4();
    dispatch({ type: ADD_REVIEW, payload: review });
  };

  const filterReviews = async (date) => {
    const res = await axios.post("/api/reviews/dateFilter", date);
    dispatch({ type: FILTER_REVIEW, payload: res.data });
  };

  const filterReviewsCategory = async (restaurantName) => {
    try {
      setLoading();
      console.log(restaurantName);
      let data = {
        restaurantName: restaurantName,
      };
      console.log("data: ",data)
      const res = await axios.post("/api/reviews/dataReviewFilter", data);
      console.log("res: ",res);
      dispatch({ type: FILTER_REVIEW_CATEGORY, payload: res.data});
    } catch (error) {
      dispatch({ type: REVIEWS_ERROR, payload: error.message });
    }
  };

  const updateReview = (review) => {
    dispatch({ type: UPDATE_REVIEW, payload: review });
  };

  const deleteReview = (id) => {
    dispatch({ type: DELETE_REVIEW, payload: id });
  };

  const setCurrent = (review) => {
    dispatch({ type: SET_CURRENT, payload: review });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  // Set Alert
  // Remove Alert
  const setLoading = () => dispatch({ type: SET_LOADING });
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
        filterReviewsCategory,
        clearFilter,
        registerReview,
        filtered: state.filtered,
        reviewsCategory: state.reviewsCategory
      }}
    >
      {props.children}
    </reviewContext.Provider>
  );
};

export default ReviewState;