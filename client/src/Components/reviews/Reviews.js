import React, { Fragment, useContext } from "react";
import ReviewContext from "../../context/reviewPage/reviewContext";
import ReviewItem from "./ReviewItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Reviews = () => {
  const reviewContext = useContext(ReviewContext);
  const { reviews, filtered } = reviewContext;
  if (reviews.length === 0) {
    return <h2>Please add a Review</h2>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(item => (
              <CSSTransition key={item.id} classNames="item" timeout={500}>
                <ReviewItem review={item} />
              </CSSTransition>
            ))
          : reviews.map(item => (
              <CSSTransition key={item.id} classNames="item" timeout={500}>
                <ReviewItem review={item} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};
export default Reviews;
