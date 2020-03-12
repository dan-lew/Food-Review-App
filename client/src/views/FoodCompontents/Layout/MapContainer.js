import GoogleMapReact from 'google-map-react';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React,{Component} from 'react';

const API_KEY = "AIzaSyD1R-U-DEGLzPr-e8z1TwW_p0K27Zmu7ic"
class MapContainer extends Component {
   
  render() {
      
    return(
      <section className="col-8 h-lg">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: {API_KEY},
            libraries: ['places', 'directions']
          }}
          defaultZoom={15} // Supports DP, e.g 11.5
          defaultCenter={{ 
              lat: 53.5510846,
                lng: 9.9936819}}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        >
        </GoogleMapReact>
      </section>
    );
  }
}

export default MapContainer;