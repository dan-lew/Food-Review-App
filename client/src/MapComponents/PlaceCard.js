import React from "react";
import { Rate } from "antd";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import stylesB from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);
const useStylesB = makeStyles(stylesB);

// TODO: info is bad naming.
const PlaceCard = ({ info, key }) => {
  const classes = useStyles();
  const classesB = useStylesB();

  const {
    address,
    distanceText,
    name,
    openNow,
    photoUrl,
    priceLevel,
    rating,
    timeText
  } = info;
  return (
    <div key={key} xs={12} sm={12} md={6} lg={6} className="">
      {/* col-3 w-100 mx-4 my-4 */}
      <img src={photoUrl} className="" alt="" />
      <GridContainer>
        <GridItem>
          <Card>
            <CardBody>
              <CardHeader>
                <h5 className="">{name}</h5>
              </CardHeader>
              <span className="">{address}</span>
              <span className="">{distanceText}</span>
              <span className="">{timeText}</span>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <List>
            {openNow ? <ListItem>Open</ListItem> : <ListItem>Closed</ListItem>}
            <ListItem>
              Rating - <Rate value={rating} />
            </ListItem>
            {/* <ListItem>Price - <Rate value={priceLevel} character="$" /></ListItem> */}
          </List>
        </GridItem>
      </GridContainer>
      {/* <img src={photoUrl} className="image-wrapper-sm mb-2" alt="ice-cream" />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <span className="d-block mb-1">{address}</span>
          <span className="d-block">{distanceText}</span>
          <span className="d-block">{timeText}</span>
        </div>
        <ul className="list-group list-group-flush">
          {openNow ? (
            <li className="list-group-item">Open</li>
          ) : (
            <li className="list-group-item">Closed</li>
          )}
          <li className="list-group-item">
            Rating - <Rate value={rating} />
          </li>
          <li className="list-group-item">
            Price - <Rate value={priceLevel} character="$" />
          </li>
        </ul> 
      </div>*/}
    </div>
  );
};

export default PlaceCard;
