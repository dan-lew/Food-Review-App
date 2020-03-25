import React, { Fragment, useEffect } from "react";
import { Rate, AutoComplete } from "antd";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// TODO: info is bad naming.
const PlaceCard = ({ info, index }) => {
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
  let isPicture = true;
  console.log("photo: ", photoUrl);
  if (photoUrl === "" || photoUrl === null || photoUrl === "undefined") {
    console.log("photoUrl: ", photoUrl);
    isPicture = false;
  }
  useEffect(() => {
    imgShow(isPicture);
  });
  let imgShow = isPicture => {
    console.log("photoUrlShow: ", photoUrl);
    console.log("isPicture: ", isPicture);

    if (isPicture) {
      return (
        <Fragment>
          <img
            src={photoUrl}
            style={{
              width: "200px",
              height: "200px",
              marginTop: "20px",
              borderRadius: "50%",
              boxShadow: "2px 2px 12px #969696"
            }}
             alt="No Photo"
            // alt={photoUrl}
          />
        </Fragment>
      );
    } else if (isPicture) {
      return (
        <Fragment>
          {" "}
          <div
            style={{
              backgroundColor: "#f0d5f5",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              margin: "auto",
              justifyItems: "center",
              textAlign: "center",
              alignItems: "center",
              display: "grid",
              marginTop:"20px",
              boxShadow: "2px 2px 12px #969696"
              //, flexWrap: "wrap"
            }}
          >
            <h4>
              The pictures is not available
            </h4>
          </div>
        </Fragment>
      );
    }
  };

  console.log("isPicture: ", isPicture);
  return (
    <GridContainer
      style={{ textAlign: "center", justifyContent: "space-around" }}
      xs={12}
      sm={12}
      md={4}
      lg={4}
    >
      <GridItem
        style={{
          textAlign: "center",
          display: "grid",
          justifyContent: "center"
        }}
      >
        <Card>
          <div
            key={index}
            style={{
              justifyContent: "center",
              // 'display':'grid',
              textAlign: "center"
              // alignItems: "center"
            }}
          >
            {imgShow(isPicture)}

            <CardBody
              style={{ textAlign: "center", justifyContent: "space-around" }}
              xs={12}
              sm={4}
              md={4}
              lg={4}
            >
              <Card
                style={{ textAlign: "center", justifyContent: "space-evenly" }}
              >
                <h5 style={{'color':"#9c27b0"}} className="card-title">{name}</h5>
                <span className="d-block mb-1">{address}</span>
                <span className="d-block">{distanceText}</span>
                <span className="d-block">{timeText}</span>

                <CardBody>
                  <ul className="list-group list-group-flush">
                    {openNow ? (
                      <li className="list-group-item">Open</li>
                    ) : (
                      <li className="list-group-item">Closed</li>
                    )}
                    <li className="list-group-item">
                      Rating - <Rate value={rating} />
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </CardBody>
          </div>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default PlaceCard;

// switch (isPicture) {
//   case true:

//     return (
//       <Fragment>
//         <img
//           src={photoUrl}
//           style={{
//             width: "200px",
//             height: "200px",
//             "border-radius": "50%",
//             border: "2px #9c27b0 solid",
//             boxShadow: "2px 2px 5px #9c27b0"
//             //   justifyContent: "center",
//             //  textAlign: "center",
//             //   alignItems: "center",
//             //'display': 'grid',
//             // flexWrap: "wrap"
//           }}
//           // alt="Restaurant"
//           alt={photoUrl}
//         />
//       </Fragment>
//     );
//     break;
//   case false:
//   return(  <Fragment>
//       <div
//         style={{
//           backgroundColor: "#CBA6E8",
//           width: "200px",
//           height: "200px",
//           "border-radius": "50%",
//           justifyContent: "center",
//           textAlign: "center",
//           alignItems: "center",
//           display: "grid"
//           //, flexWrap: "wrap"
//         }}
//       >
//         <h4
//         // style={{
//         //   // justifyItems: 'center',
//         //   // 'display': 'grid',
//         //   // alignContent: 'center'
//         // }}
//         >
//           The pictures is not available
//         </h4>
//       </div>
//     </Fragment>);
// }
