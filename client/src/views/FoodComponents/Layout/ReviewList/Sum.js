//Sum.js
import React from 'react';

export default function Sum(props) {
    
    console.log("props.price: ",props.price)
    var sum = 0;
    var getPrice;
    if (props.price != null) {
      getPrice = props.price.map((item) => {
        console.log(item.price);
        sum += item.price;
        return sum;
      });
    }
  
  console.log("anzahl:",sum);
    return (
        <div>
           <h4  style={{ color: "#9c27b0" }}> Total: {sum}€ </h4>    
        </div>
    )
}
