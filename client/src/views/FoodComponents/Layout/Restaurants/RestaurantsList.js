import React,{useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import styles from "assets/jss/material-kit-react/views/components.js";


export default function RestaurantsList(props) {
  props.restaurants = {
    url: "",
    photo: "",
    name: "",
    rating: "",
    isLoading: "false",
    fetchedData: []
  };
  console.log(props.restaurants)
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  console.log(classes)
  console.log("RestaurantsList")
  const { url, photo,name,rating,fetchedData } = props;
  const [restaurants, setRestaurants] = useState();
  return (
      <GridContainer>
          <GridItem>

          </GridItem>
      </GridContainer>
  )

  
}


// class RestaurantsList extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       url:"",
//       photo:"",
//       name:"",
//       rating:"",
//       isLoading:"false",
//       fetchedData:[]
//     }
//   }

//  let static getDerivedStateFromProps(props, state) {
//       if(state.url!==props.url){
//           return (state.url=props.url);
//       }else{
//           return null;
//       }
//   }

//   async componentDidMount() {
//       console.log("component Restaurant Did Mount");
//       this.setState({isLoading:true});
//       const url=this.state.url;
//       console.log("url ", url);

//       fetch(url)
//       .then((response)=>{
//           return(response.json())
//       })
//       .then((data)=>{
//           console.log(data);
//           this.setState({
//               fetchedData:data,
//               isLoading:false
//           })
//       })
//   }

//   render() {
//       let restaurants=[];
//       let loading;
//       if(this.state.isLoading){
//           loading=<div>
//               <h5>loading...</h5>
//               <div className="loadDiv"></div>
//           </div>
//       }

//       if(this.state.fetchedData.length>0){

//           restaurants=this.state.fetchedData.map((item,index)=>{
//               //style for images
//               // let style={
//               //     // width:item.previewWidth,
//               //     // height: item.previewHeight,
//               //     // display: 'inline-block'
//               // }
//               console.log("restaurants: ",restaurants)
//               return (

//                   <div key={index} className="">
//                     {/* <div key={index} style={style}></div> */}
//                       {/* <a href={item.largeImageURL} target="_blank"> */}
//                           {/* <img src={item.previewURL}  /> */}

//                           {/* <img src={item.largeImageURL}  /> */}
//                       {/* </a>    */}
//                   </div>
//               )
//           })
//       }
//       return (

//           <div className="images">
//               {loading}
//               {restaurants}
//           </div>
//       )
//   }

//}

//import tileData from './tileData';
// const RestaurantsList=()=> {
// const useStyles = makeStyles(styles);
//     const classes = useStyles();

//     return (
//        <div className={classes.section}>
//             <h3>recomended ...</h3>
//             <GridContainer>
//           <GridItem xs={12} sm={12} md={4}>
//             <Card plain>
//               <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>

//               </GridItem>

//               <GridList className={classes.gridList} cols={2.5}>
//         {/* {tileData.map(tile => (
//           <GridListTile key={tile.img}>
//             <img src={tile.img} alt={tile.title} />
//             <GridListTileBar
//               title={tile.title}
//               classes={{
//                 root: classes.titleBar,
//                 title: classes.title,
//               }}
//               actionIcon={
//                 <IconButton aria-label={`star ${tile.title}`}>
//                   <StarBorderIcon className={classes.title} />
//                 </IconButton>
//               }
//             />
//           </GridListTile>
//         ))} */}
//       </GridList>

//               <h4 className={classes.cardTitle}>
//                 Italian
//                 <br />
//                 <small className={classes.smallTitle}>Restaurant</small>
//               </h4>
//               <CardBody>
//                 <p className={classes.description}>
//                   You can write here details about one of your team members. You
//                   can give more details about what they do. Feel free to add
//                   some <a href="#pablo">links</a> for people to be able to
//                   follow them outside the site.
//                 </p>
//                 <StarIcon /><StarIcon />
//               <StarIcon /><StarBorderIcon /><StarBorderIcon />
//               </CardBody>
//               <CardFooter className={classes.justifyCenter}>

//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-twitter"} />
//                 </Button>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-instagram"} />
//                 </Button>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-facebook"} />
//                 </Button>
//               </CardFooter>
//             </Card>
//           </GridItem>
//           <GridItem xs={12} sm={12} md={4}>
//             <Card plain>
//               <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>

//               </GridItem>
//               <h4 className={classes.cardTitle}>
//                 Greek
//                 <br />
//                 <small className={classes.smallTitle}>Restaurant</small>
//               </h4>
//               <CardBody>
//                 <p className={classes.description}>
//                   You can write here details about one of your team members. You
//                   can give more details about what they do. Feel free to add
//                   some <a href="#pablo">links</a> for people to be able to
//                   follow them outside the site.
//                 </p>
//                 <StarIcon /><StarIcon />
//               <StarIcon /><StarBorderIcon /><StarBorderIcon />
//               </CardBody>
//               <CardFooter className={classes.justifyCenter}>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-twitter"} />
//                 </Button>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-linkedin"} />
//                 </Button>
//               </CardFooter>
//             </Card>
//           </GridItem>
//           <GridItem xs={12} sm={12} md={4}>
//             <Card plain>
//               <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>

//               </GridItem>
//               <h4 className={classes.cardTitle}>
//                     Japanese
//                 <br />
//                 <small className={classes.smallTitle}>Restaurant</small>
//               </h4>
//               <CardBody>
//                 <p className={classes.description}>
//                   You can write here details about one of your team members. You
//                   can give more details about what they do. Feel free to add
//                   some <a href="#pablo">links</a> for people to be able to
//                   follow them outside the site.
//                 </p>
//                 <StarIcon /><StarIcon />
//               <StarIcon /><StarBorderIcon /><StarBorderIcon />
//               </CardBody>
//               <CardFooter className={classes.justifyCenter}>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-twitter"} />
//                 </Button>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-instagram"} />
//                 </Button>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-facebook"} />
//                 </Button>
//               </CardFooter>
//             </Card>
//           </GridItem>
//         </GridContainer>
//         </div>
//     )
// }

// export default RestaurantsList
