import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { GoogleComponent } from 'react-google-location'

const API_KEY = ""  // how to get key - step are below

class Place extends Component {

constructor(props) {
    super(props)

    this.state = {
         place:null
    }
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
export default Place; 