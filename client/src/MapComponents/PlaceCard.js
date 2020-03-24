import React from 'react';
import { Rate } from 'antd';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// TODO: info is bad naming.
const PlaceCard = (({ info, index }) => {
  const { address, distanceText, name, openNow, photoUrl, priceLevel, rating, timeText } = info;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
    <div key={index} style={{"margin":"30px"}}>
      <img src={photoUrl} className="image-wrapper-sm mb-6" alt="Restaurant" />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <span className="d-block mb-1">{address}</span>
          <span className="d-block">{distanceText}</span>
          <span className="d-block">{timeText}</span>
        </div>
        <ul className="list-group list-group-flush">
          {openNow ?
            <li className="list-group-item">Open</li>
            :
            <li className="list-group-item">Closed</li>
          }
          <li className="list-group-item">Rating - <Rate value={rating} /></li>
          {/* <li className="list-group-item">Price - <Rate value={priceLevel} character="$" /></li> */}
        </ul>
      </div>
    </div>
    </GridItem>
    </GridContainer>
  );
});

export default PlaceCard;