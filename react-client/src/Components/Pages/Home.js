import React from 'react';
import Carousels from './Carousels'
import RestaurantsList from './RestaurantsList'

const Home = () => {
    return (

        <div className="">
            
            <div>
                carousel
                <Carousels />
            </div>
           <div className="grid-2">
                <RestaurantsList />
            </div>
        </div>
    )
}
export default  Home;