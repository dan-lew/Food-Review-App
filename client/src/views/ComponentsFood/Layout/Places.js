import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { GoogleComponent } from 'react-google-location'

const API_KEY = "AIzaSyD1R-U-DEGLzPr-e8z1TwW_p0K27Zmu7ic"  // how to get key - step are below

class Places extends Component {

constructor(props) {
    super(props)

    // this.state = {
    //      place:null
    // }
    this.state = {
        root:"https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
        key:"AIzaSyB6VLqKGeKFRhs_5UC3Tj-pRUVNmCYOiuI",
        location:"",
        type:"",
        url:"",
        letSearch: false,
        loadedImages:null
     }
}

    saveQuery=(e)=>{
        e.preventDefault();
        this.setState({
        type:e.target.value, 
        letSearch:false
        })
    }

    searchInput=()=>{
        
        let typeQuery= this.state.type;
    
        //https://maps.googleapis.com/maps/api/place/nearbysearch/json
        //?location=53.6424933,10.0465429&radius=2000
        //&type=restaurant&key=AIzaSyB6VLqKGeKFRhs_5UC3Tj-pRUVNmCYOiuI

        // let newUrl = this.state.root+"?key="+this.state.key+"&per_page=200&q="
        let newUrl = this.state.root+"?location="+"&radius=2000&type="+typeQuery+"&key="+this.state.key;
        // typeQuery.forEach((item)=>{
        //   newUrl+=item+"+";
        //   console.log(newUrl);
        // })
        this.setState({
          url:newUrl,
          letSearch:true,
          loadedImages:null
        })
      }
    

  render() {
      console.log("return ",this.state.place)
    return (
        <div >
           <GoogleComponent
           
            apiKey={API_KEY}
            language={'de'}
            country={'country:de'}
            coordinates={true}
            placeholder={'Start typing your location'}
            locationBoxStyle={'custom-style'}
            locationListStyle={'custom-style-list'}
            onChange={(e) => { this.setState({ place: e }) }} />
        </div>
  
      )
    
  }
}
export default Places; 