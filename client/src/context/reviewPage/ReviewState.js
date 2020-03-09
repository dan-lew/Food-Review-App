import React, { useReducer } from "react";
import uuid from "uuid";
import reviewContext from "./reviewContext";
import reviewReducer from "./reviewReducer";
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

const ReviewState = props => {
  const initialState = {
    reviews: [
      {
        id: 1,
        restaurantName: " Mexican Restaurant",
        category: 'Mexican',
        nameOfDish: "Burrito",
        dateOfVisit: "22/03/2019",
        price: "8.99",
        photo: "burritoimg.jpeg",
        rating: "4",
        comment: "The Burrito was juicy"
      },
      {
        id: 2,
        restaurantName: " Japanese Restaurant",
        category: "Sushi",
        nameOfDish: "California Rolls",
        dateOfVisit: "24/06/2019",
        price: "8.99",
        photo: "sushiimg.jpeg",
        rating: "3",
        comment: "The sushi was nommy"
      },
    ],
    current: null, filtered : null
  };
  const [state, dispatch] = useReducer(reviewReducer, initialState);

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
        deleteReview,
        setCurrent,
        clearCurrent,
        updateReview,
        filterReviews,
        clearFilter,
        filtered:state.filtered
      }}
    >
      {props.children}
    </reviewContext.Provider>
  );
};

export default ReviewState;
