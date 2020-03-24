import React, { useEffect ,useContext} from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CardListRestaurant from './CardListRestaurant'
import RestaurantContext from '../../../../context/restaurants/restaurantContext'

// const ListFoodStyle = {
//   show: {
//     display: "block"
//   },
//   notShow: {
//     display: "none"
//   }
// };

const ListRestaurantsProfilReview=(props)=> {

// Restaurants list
  const restaurantContext = useContext(RestaurantContext);
  const { getCatRestaurant, catrestaurants } = restaurantContext;
  useEffect(()=>{
    getCatRestaurant(props.category)
    console.log('use effect in list restaurants profile review')
  },[])
  console.log(catrestaurants)

   // let restaurantsState = {
  //   id: "1",
  //   url: "",
  //   img: { src: "https://via.placeholder.com/180x130" },
  //   name: "Restaurant name",
  //   rating: "",
  //   food:"",
  //   isLoading: "false",
  //   category: "",
  //   count: 0
  // };

  // console.log("state ", restaurantsState.count);
  // console.log(restaurantsState.img.src);
  // console.log(restaurantsState.food);
//   const [restaurants, setRestaurants] = useState(restaurantsState.count);
//   const { id, category, count, url, img, food, name, rating } = props;

//  //food set 


//   const [classList, setClassList] = React.useState("display");
//   const handleShow = () => {
//     if (classList === "block") {
//       setClassList("display");
//     } else {
//       setClassList("block");
//     }
//   };

  return (
    <div className={props.className}>
      <GridContainer>
        <GridItem>
          {catrestaurants.map(restaurant=>(
            <CardListRestaurant key={restaurant.id} restaurant={restaurant}/> //<div>{user.login}</div>
          ))}
          {/* // edit */}
          {/* <ListSelectFoodReview /> */}
        </GridItem>
        <GridItem></GridItem>
      </GridContainer>

    </div>
  );
}
export default ListRestaurantsProfilReview