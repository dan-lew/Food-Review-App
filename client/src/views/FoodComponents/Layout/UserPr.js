import React, { useState, useContext, Fragment, useEffect } from "react";
import AuthContext from "../../../context/auth/authContext";
import { Link } from "react-router-dom";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import avatar from "assets/img/faces/avatar.jpg";
import Datetime from "react-datetime";
import CardHeaderList from "./CardList/CardHeaderList";
import CardBodyList from "./CardList/CardBodyList";
import ListRestaurantsReview from "./ReviewList/ListRestaurantsReview";
import ListFoodsReview from "./ReviewList/ListFoodsReview";
import Sum from "./ReviewList/Sum";
import FileUpload from "../Pages/ProfileImgUpload/FileUpload";
import ReviewContext from "../../../context/reviewPage/reviewContext";

export default function UserPr(props) {
  const useStylesT = makeStyles(stylesT);

  const classesT = useStylesT();
  console.log(classesT);
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  console.log(classes);

  const authContext = useContext(AuthContext);
  const { user } = authContext;
  console.log("The User =", user);

  const reviewContext = useContext(ReviewContext);
  const { reviews, getReviews } = reviewContext;
  console.log(reviews, getReviews);

  useEffect(() => {
    getReviews();
  }, []);
  console.log(reviews);

  const [userData, setUserData] = useState([
    {
      id: "1",
      name: "Restaurant name",
      rating: 2,
      food: "Lasagne",
      date: new Date(),
      user: {
        photo: "https://via.placeholder.com/60x60",
        description: "bla bla bla bla",
        name: "user name",
        rating: 3,
        price: 20.0
      }
    },
    {
      id: "1",
      name: "Restaurant name",
      rating: 4,
      food: "fisch",
      date: new Date(),
      user: {
        photo: "https://via.placeholder.com/60x60",
        description: "fisch bla bla bla",
        name: "user2 name",
        rating: 4,
        price: 30.0
      }
    }
  ]);

  const onChange = e =>
    setUserData({ ...user, [e.target.name]: e.target.value });
  const getImgPath = path => {
    console.log(path);
    setUserData({ ...userData, photo: path });
  };
  const getFullDate = (date)=>{
    let d = new Date(date);
    var tag = d.getDate();
    if(tag <= 9){
      tag = '0'+tag;
    }
    var monat = d.getMonth()+1;
    if(monat <= 9){
      monat = '0'+monat;
    }
    var jahr = d.getFullYear(); 
    var uhrzeit = "Date of Visit " + tag + "." + monat + "." + jahr 
    return uhrzeit; 

  }

  console.log("user: ", user);
  let price = [];
  let getPrice = count => {
    if (count === 0) {
      console.log("keine daten");
      return (
        <Fragment>
          <h3>Keine Angaben</h3>
        </Fragment>
      );
    } else {
      for (let i = 0; i < count; i++) {
        console.log("count: ", count);
        console.log(userData[i].user.price);
        price.push(userData[i].user.price);
      }
      console.log(price);
      return price;
    }
  };

  return (
    <div
      // style={{ paddingTop: "50px", width: "90%" }}
      className={classesT.marginCenter}
    >
      <Card
        style={{ paddingTop: "50px", width: "90%" }}
        className={classesT.marginCenter}
      >
        <CardBody className={classesT.marginCenter}>
          <GridContainer className={classesT.marginCenter}>
            <GridItem
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className={classesT.marginCenter}
            >
              <GridContainer className={classesT.marginLeft}>
                <GridItem xs={12} sm={12} md={10}>
                  <Card>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      Welcome {`${user.firstname}   ${user.lastname}`}
                    </CardHeader>
                    <CardBody
                      className={
                        { display: "flex", alignItems: "center" } +
                        " " +
                        classes.textCenter
                      }
                    >
                      <div onChange={onChange}>
                        {/* User foto links */}
                        <img
                          src={user.photo}
                          alt="..."
                          className={
                            {
                              height: "100px",
                              justifyContent: "center",
                              width: "100%"
                            } +
                            classesT.imgRaised +
                            " " +
                            classesT.imgRoundedCircle +
                            " " +
                            classesT.imgFluid
                          }
                        />

                        <p>Edit your profile image...</p>
                        <FileUpload getImgPath={getImgPath} />
                      </div>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <Link
                        style={{ color: "#9c27b0" }}
                        className={classes.navLink}
                        to="/review-page"
                      >
                        Add a review
                      </Link>
                      <br></br>
                      <Link
                        style={{ color: "#9c27b0" }}
                        className={classes.navLink}
                        to="/editProfile"
                      >
                        Edit Profile
                      </Link>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  className={classesT.marginLeft}
                ></GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={8} lg={8}>
              {/* datapicker*/}
              <GridContainer style={{ paddingTop: "90px" }}>
                <GridItem
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  className={classesT.marginLeft}
                >
                  <Card>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      From:
                    </CardHeader>
                    <CardBody>
                      <InputLabel
                        style={{ visibility: "hidden" }}
                        className={classes.label}
                      ></InputLabel>
                      <br />
                      <FormControl fullWidth>
                        <Datetime
                          inputProps={{
                            placeholder: "Please choose your Date"
                          }}
                          // id="dateodateOfVisitfvisit"
                          // formControlProps={{
                          //   fullWidth: true
                          // }}
                          // inputProps={{
                          //   // onChange: onChange,
                          //   name: "dateOfVisit",
                          //   type: "date",
                          //   endAdornment: (
                          //     <InputAdornment position="end">
                          //       <i className="fas fa-calendar-alt"></i>
                          //     </InputAdornment>
                          //   )
                          // }}
                        />
                      </FormControl>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  className={classesT.marginLeft}
                >
                  <Card>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      To:
                    </CardHeader>
                    <CardBody>
                      <InputLabel className={classes.label}></InputLabel>
                      <br />
                      <FormControl fullWidth>
                        <Datetime
                          inputProps={{
                            placeholder: "Please choose your Date"
                          }}
                        />
                      </FormControl>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              {/* restaurants reviews */}
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className={classesT.marginLeft}
                >
                  <h4>Number of restaurants</h4>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className={classesT.marginLeft}
                >
                  <Card>
                    <CardBody>
                      <ListRestaurantsReview />
                    </CardBody>
                  </Card>
                </GridItem>

                <GridItem
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className={classesT.marginLeft}
                >
                  <h4>Top Foods reviewed</h4>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className={classesT.marginLeft}
                >
                  <Card>
                    <CardBody>
                      <ListFoodsReview />
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  md={10}
                  lg={6}
                  className={classesT.marginLeft}
                >
                  <h4>Total Spent on food for this period </h4>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  md={8}
                  lg={6}
                  className={classesT.marginLeft}
                >
                  <Card>
                    <CardBody>
                      {/* <Sum price={user1[].user.price}/> */}
                      <Sum price={getPrice(user.length)} />
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
              md={10}
              lg={8}
              className={classesT.marginLeft}
            >
              {/* reviews rating*/}
              <GridContainer>
                <GridItem xs={12} sm={12} md={8} lg={12}>
                  <h3 style={{ paddingLeft: "30px" }}>Your reviews...</h3>
                </GridItem>
                {reviews !== null &&
                  reviews.map(item => {
                    return (
                      <GridItem
                        xs={12}
                        sm={12}
                        md={8}
                        lg={10}
                        className={classesT.marginLeft}
                      >
                        <Card>
                          <CardHeader
                            style={{}}
                            color="primary"
                            className={classes.cardHeader}
                          
                          >
                            <CardHeaderList 
                            rating={item.rating}
                            restaurantName={item.restaurantName}
                            photo={item.photo} 
                            nameOfDish = {item.nameOfDish}
                            dateOfVisit = {getFullDate(item.dateOfVisit)}
                            />
                          </CardHeader>
                          <CardBody>
                            <CardBodyList
                            comment={item.comment}   />
                          </CardBody>
                        </Card>
                      </GridItem>
                    );
                  })}
              </GridContainer>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    </div>
  );
}
