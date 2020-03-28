import React, { useEffect ,useContext} from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CardListRestaurant from './CardListRestaurant'
import RestaurantContext from '../../../../context/restaurants/restaurantContext'


const ListRestaurantsProfilReview=(props)=> {

  // Restaurants list
  const restaurantContext = useContext(RestaurantContext);
  const { getCatRestaurant, catrestaurants } = restaurantContext;
  useEffect(()=>{
    getCatRestaurant(props.category)
    console.log('use effect in list restaurants profile review')
  },[])
  console.log(catrestaurants)


  return (
    <div className={props.className}>
      <GridContainer>
        <GridItem>
          <GridContainer>
            {catrestaurants.map(restaurant => (
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <CardListRestaurant
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              </GridItem> //<div>{user.login}</div>
            ))}
            {/* // edit */}
            {/* <ListSelectFoodReview /> */}
          </GridContainer>
        </GridItem>
        <GridItem></GridItem>
      </GridContainer>
    </div>
  );
};
export default ListRestaurantsProfilReview;
