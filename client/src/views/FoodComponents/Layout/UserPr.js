import React,{useStyles} from 'react'
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardFooter from 'components/Card/CardFooter';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import { cardTitle } from 'assets/jss/material-kit-react';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import avatar from "assets/img/faces/avatar.jpg";
import Avatar from "@material-ui/core/Avatar";
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Datetime from "react-datetime";
import CardHeaderList from './CardList/CardHeaderList';
import CardBodyList from './CardList/CardBodyList';
import ListRestaurantsReview from './ReviewList/ListRestaurantsReview';
import ListFoodsReview from './ReviewList/ListFoodsReview';
import Sum from './ReviewList/Sum'


export default function UserPr(props) {
    const useStylesT = makeStyles(stylesT);

    const classesT = useStylesT();
    console.log(classesT)
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    console.log(classes)
    const { ...rest } = props;
    return (
        <div style={{paddingTop:"80px", width:"90%"}}  className={classesT.marginCenter}>   
        <Card className={classesT.marginCenter} >
            <CardBody  className={classesT.marginCenter}>
            <GridContainer  className={classesT.marginCenter} >
                <GridItem  xs={12} sm={12} md={4} lg={4} className={classesT.marginCenter}>
                    <GridContainer   className={classesT.marginLeft}>
                    <GridItem  style={{paddingTop:"0px"}}  xs={12} sm={12} md={10} >
                    <Card  >
                        <CardHeader style={{}} color="primary" className={classes.cardHeader}>
                            User Profile
                        </CardHeader>
                        <CardBody className={{ display: "flex", 
                                            alignItems: "center"}+" "+classes.textCenter  }>
                                        {/* User foto links */}
                                        <img 
                                        src={avatar}
                                        alt="..."
                                        className={
                                            {height: "100px", justifyContent: "center",  width: "100%"}+
                                        classesT.imgRaised +
                                        " " +
                                        classesT.imgRoundedCircle +
                                        " " +
                                        classesT.imgFluid 
                                        
                                }/>
                        </CardBody>
               
                    </Card>
                      {/* <Avatar alt="User" src={avatar} className={classes.imgRounded+" "+classes.large} ></Avatar>       */}
                      <Card>
                        <CardBody>
                        <Link className={classes.navLink} to="/addReview">Add a review</Link>
                        <br></br>
                        <Link className={classes.navLink} to="/editProfile">Edit Profile</Link>
                        <br></br>
                        <Link className={classes.navLink} to="/logout" >Logout</Link>
                        </CardBody>
                    </Card>
                    </GridItem>
                    <GridItem  xs={12} sm={12} md={12} lg={4} className={classesT.marginLeft}>
                    
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem  xs={12} sm={12} md={8} lg={8}  >
                    {/* datapicker*/}
                    <GridContainer style={{paddingTop:"90px"}}>
                        <GridItem xs={12} sm={6} md={6} lg={6} className={classesT.marginLeft}>
                            <Card>
                                <CardHeader color="primary" className={classes.cardHeader}>
                                    From:
                                </CardHeader>
                                <CardBody>
                                    <InputLabel style={{visibility:"hidden"}} className={classes.label}>
                                    </InputLabel>
                                <br />
                                <FormControl fullWidth>
                                    <Datetime
                                    inputProps={{ placeholder: "Please choose your Date" }}
                                    />
                                </FormControl>

                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6} lg={6} className={classesT.marginLeft}>
                            <Card>
                                <CardHeader color="primary" className={classes.cardHeader}>
                                To:
                                </CardHeader>
                                <CardBody>
                                    <InputLabel className={classes.label}>
                                    </InputLabel>
                                <br />
                                <FormControl fullWidth>
                                    <Datetime
                                    inputProps={{ placeholder: "Please choose your Date" }}
                                    />
                                </FormControl>

                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                     {/* restaurants reviews */}
                    <GridContainer >
                        <GridItem xs={12} sm={12} md={6} lg={6}className={classesT.marginLeft}>
                            <h4>Number of restaurants</h4>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} lg={6} className={classesT.marginLeft}>
                            <Card>
                                <CardBody>
                                    <ListRestaurantsReview />
                                </CardBody>
                            </Card>
                            
                        </GridItem>
                      
                        <GridItem xs={12} sm={12} md={6} lg={6} className={classesT.marginLeft}>
                            <h4>Top Foods reviewed</h4>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} lg={6} className={classesT.marginLeft}>
                            <Card>
                                <CardBody>
                                   <ListFoodsReview />
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={10} lg={6} className={classesT.marginLeft}>
                            <h4>Total Spent on food for this period </h4>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={8} lg={6} className={classesT.marginLeft}>
                        <Card>
                                <CardBody>  
                                    <Sum />
                                </CardBody>
                            </Card>                            
                        </GridItem>
                                         
                    </GridContainer>
                </GridItem>
                <GridItem   xs={12} sm={12} md={10} lg={8} className={classesT.marginLeft}>
                    {/* reviews rating*/}
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={8} lg={12}>
                            <h3 style={{paddingLeft:"30px"}}>Your reviews...</h3>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={8} lg={10} className={classesT.marginLeft}>
                                <Card>
                                <CardHeader style={{}} color="primary" className={classes.cardHeader}>
                                    <CardHeaderList />    
                                </CardHeader>
                                    <CardBody>
                                        <CardBodyList />
                                    </CardBody>
                                </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={8} lg={10} className={classesT.marginLeft}>
                                <Card>
                                <CardHeader style={{}} color="primary" className={classes.cardHeader}>
                                    <CardHeaderList />      
                                </CardHeader>
                                    <CardBody>
                                        <CardBodyList />
                                    </CardBody>
                                </Card>
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>

            </CardBody>
        </Card>
            
        </div>
    )
}
