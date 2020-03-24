import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { GoogleComponent } from 'react-google-location'
import RestaurantsList from './Restaurants/RestaurantsList'
import InputField from './InputFields'

const API_KEY = "AIzaSyD1R-U-DEGLzPr-e8z1TwW_p0K27Zmu7ic"  // how to get key - step are below

class Places extends Component {

constructor(props) {
    super(props)
  
    // this.state = {
    //      place:null
    // }
    this.state = {
        root:"https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
        key:API_KEY,
        location:"",
       // type:"",
        url:"",
        letSearch: false,
        loadedPlaces:null,
        place:null
         }
}

    saveQuery=(e)=>{
        e.preventDefault();
        this.setState({
       // type:e.target.value, 
        letSearch:false,
        place:e
        })
    }

    searchPlaces=()=>{
        
        let typeQuery= this.state.type;
    
        //https://maps.googleapis.com/maps/api/place/nearbysearch/json
        //?location=53.6424933,10.0465429&radius=2000
        //&type=restaurant&key=

        // let newUrl = this.state.root+"?key="+this.state.key+"&per_page=200&q="
        let newUrl = this.state.root+"?location="+"&radius=2000&type="+typeQuery+"&key="+this.state.key;
        // typeQuery.forEach((item)=>{
        //   newUrl+=item+"+";
        //   console.log(newUrl);
        // })
        this.setState({
          url:newUrl,
          letSearch:true,
          loadedPlaces:null
        })
      }
    
  loadPlaces=()=>{
    console.log(this.state.url)
    let newPlaces=<RestaurantsList url={this.state.url}/>;
    this.setState({loadedPlaces:newPlaces, letSearch:false})
  }

  render() {
      console.log("return ",this.state.place)
      if(this.state.letSearch){
        this.loadPlaces();
      }
    return (
        <div >        
          <InputField change={(e) => { this.setState({ place: e }) } }/>
        </div>

      )
    
  }
}
export default Places; 