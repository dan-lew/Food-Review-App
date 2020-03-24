<<<<<<< HEAD
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MapAutoComplete from "../../MapComponents/MapAutoComplete";
import MapMarker from "../../MapComponents/MapMarker";
import PlaceCard from "../../MapComponents/PlaceCard";
import ConstraintSlider from "../../MapComponents/ConstraintSlider";
import { Button, Input, Divider, message, Slider } from "antd";
import Geocode from "react-geocode";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import classNames from "classnames";
// import { makeStyles } from "@material-ui/core/styles";
// import styles from "assets/jss/material-kit-react/components/cardStyle";
// import stylesI from "assets/jss/material-kit-react/imagesStyles.js";
// import stylesT from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
const API_KEY=""
const DE_COOR = { lat: 51.1657, lng: 10.4515 };
// const useStylesT = makeStyles(stylesT);
// const useStylesI = makeStyles(stylesI);
// const classesT = useStylesT();
// const classesI = useStylesI();
// const useStyles = makeStyles(styles);
// const classes = useStyles();
=======

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapAutoComplete from '../../MapComponents/MapAutoComplete';
import MapMarker from '../../MapComponents/MapMarker';
import PlaceCard from '../../MapComponents/PlaceCard';
//../components/ConstraintSlider
import ConstraintSlider from '../../MapComponents/ConstraintSlider';
import { Button, Input, Divider, message, Slider } from 'antd';
import Geocode from 'react-geocode';
const DE_COOR = { lat:51.1657, lng:10.4515 };

>>>>>>> testing1
class MapsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constraints: [{ name: '', time: 0 }],
      searchResults: [],
      mapsLoaded: false,
      markers: [],
      map: {},
      mapsApi: {},
      germanyLatLng: {},
      autoCompleteService: {},
      placesService: {},
      geoCoderService: {},
      directionService: {},
      lngPlace:[],
      latPlace:[],
      restName:[],
      mapCenter:{lat:51.1657, lng:10.4515},
      zoom:6,
      cityLocation: {lat:0,lng:0}
    };
  }
  

  // Update name for constraint with index === key
  updateConstraintName = ((event, key) => {
    event.preventDefault();
    const prevConstraints = this.state.constraints;
    const constraints = Object.assign([], prevConstraints);
    constraints[key].name = event.target.value;
    this.setState({ constraints });
  });

  // Updates distance (in KM) for constraint with index == key
  updateConstraintTime = ((key, value) => {
    const prevConstraints = this.state.constraints;
    const constraints = Object.assign([], prevConstraints);
    constraints[key].time = value;
    this.setState({ constraints });
  });

  // Adds a Marker to the GoogleMaps component
  addMarker = ((lat, lng, name) => {
    const prevMarkers = this.state.markers;
    const markers = Object.assign([], prevMarkers);
    // 
    console.log(lat,lng,name)
    // If name already exists in marker list just replace lat & lng.
    let newMarker = true;
    for (let i = 0; i < markers.length; i++) {
      if (markers[i].name === name) {
        newMarker = false;
        markers[i].lat = lat;
        markers[i].lng = lng;
        message.success(`Updated "${name}" Marker`);
        break;
      }
    }
    // Name does not exist in marker list. Create new marker
    if (newMarker) {
      markers.push({ lat, lng, name });
      // message.success(`Added new "${name}" Marker`);
    }

    this.setState({ markers });
  });

  getLocation = (lat,lng) => {
    this.setState({cityLocation:{lat:lat,lng:lng}})
  }
  setCenter=(lat,lng)=>{
    const prevMarkers = this.state.markers;
    let markers = Object.assign([], prevMarkers);
    markers.shift()
    this.setState({
      markers:markers,
      mapCenter:{
        lat:lat, lng:lng
      },
      zoom:15
    })
  }

  loadMarkers=(map,mapsApi,lat,lng,name)=>{
    let content = `<p>${name}</p>`
    let infoWindow = new mapsApi.InfoWindow({
      content:content
    })
    let marker = new mapsApi.Marker({
      position: {lat,lng},
      map:map,
      title:name
    })
    marker.addListener("click",()=>{
      infoWindow.open(map,marker)
    })
    marker.addListener("Escape",()=>{
      infoWindow.open(null)
    })

  }


  // Runs once when the Google Maps library is ready
  // Initializes all services that we need
  apiHasLoaded = ((map, mapsApi) => {
    this.setState({
      mapsLoaded: true,
      map,
      mapsApi,
      germanyLatLng: new mapsApi.LatLng(DE_COOR.lat, DE_COOR.lng),
      autoCompleteService: new mapsApi.places.AutocompleteService(),
      placesService: new mapsApi.places.PlacesService(map),
      geoCoderService: new mapsApi.Geocoder(),
      directionService: new mapsApi.DirectionsService(),
    });
  });

  // With the constraints, find some places serving restaurant
  handleSearch = (() => {
    const { cityLocation, constraints, placesService, directionService, map,mapsApi } = this.state;
    if (cityLocation.lat === 0) {
      message.warn('Select a city and try again!');
      return;
    }
    const filteredResults = [];
    const timeLimit = constraints[0].time;
    const markerLatLng = new mapsApi.LatLng(cityLocation.lat, cityLocation.lng);

    const placesRequest = {
      location: markerLatLng,
      radius: '10000', // Cannot be used with rankBy. Pick your poison!
      type: ['food', 'cafe'], // List of types: https://developers.google.com/places/supported_types
      query: 'restaurant'
      //rankBy: mapsApi.places.RankBy.DISTANCE, // Cannot be used with radius.
    };
    const latPlace=[];
    const lngPlace=[];
    // First, search for restaurants shops.
    placesService.textSearch(placesRequest, ((response) => {
      // Only look at the nearest top 20.
      const responseLimit = Math.min(30, response.length);
      const total_Addresses=[];
    
      for (let i = 0; i < responseLimit; i++) {

        const restaurantPlace = response[i];
        const { rating, name } = restaurantPlace;
        const address = restaurantPlace.formatted_address; // e.g 80 mandai Lake Rd,
         total_Addresses.push(address);
        // console.log('restaurantPlace.geometry.viewpport', restaurantPlace.geometry.viewport.Ua.i)
        // Geocode.fromAddress(address).then(
        //   response => {
        //     const { lat, lng } = response.results[0].geometry.location;
        //     console.log(lat, lng);
        //   },
        //   error => {
        //     console.error(error);
        //   }
        // );
     
            latPlace[i]=restaurantPlace.geometry.viewport.Za.i;
            lngPlace[i]=restaurantPlace.geometry.viewport.Ua.i;
        
       //this.addMarker(latPlace[i],lngPlace[i],restaurantPlace.name);
       this.loadMarkers(map,mapsApi,latPlace[i],lngPlace[i],restaurantPlace.name);
        const priceLevel = restaurantPlace.price_level; // 1, 2, 3...
        let photoUrl = '';
        let openNow = false;
        if (restaurantPlace.opening_hours) {
          openNow = restaurantPlace.opening_hours.open_now; // e.g true/false
        }
        if (restaurantPlace.photos && restaurantPlace.photos.length > 0) {
          photoUrl = restaurantPlace.photos[0].getUrl();
        }

        // Second, For each restaurantPlace, check if it is within acceptable travelling distance
        const directionRequest = {
          origin: markerLatLng,
          destination: address, // Address of restaurant place
          travelMode: 'DRIVING',
        }
        directionService.route(directionRequest, ((result, status) => {
          if (status !== 'OK') { return }
          const travellingRoute = result.routes[0].legs[0]; // { duration: { text: 1mins, value: 600 } }
          const travellingTimeInMinutes = travellingRoute.duration.value / 60;
          if (travellingTimeInMinutes < timeLimit) {
            const distanceText = travellingRoute.distance.text; // 6.4km
            const timeText = travellingRoute.duration.text; // 11 mins
            filteredResults.push({
              name,
              rating,
              address,
              openNow,
              priceLevel,
              photoUrl,
              distanceText,
              timeText,
            });
          }
          console.log(filteredResults)
          // Finally, Add results to state
          this.setState({ searchResults: filteredResults });
          console.log("this.state: ", this.state)
        }));
      }
      this.setCenter(latPlace[0],lngPlace[0])
      this.setState({
        latPlace:latPlace,
        lngPlace:lngPlace,
        
      })
    }));
  });

  render() {

    const { constraints, mapsLoaded, germanyLatLng, markers, searchResults,latPlace, lngPlace} = this.state;
    const { autoCompleteService, geoCoderService } = this.state; // Google Maps Services
    return (
      <div className="w-100 d-flex py-4 flex-wrap justify-content-center">
        <h3 className="w-100 fw-md">Find Some restaurants!</h3>
        {/* Constraints section */}
     

        {/* Maps Section */}
        <section className="col-8 h-lg " >
        <Divider />
          <GoogleMapReact
            bootstrapURLKeys={{
              key: API_KEY,
              libraries: ['places', 'directions']
            }}
            defaultZoom={8}
            defaultCenter={this.state.mapCenter}
            center={this.state.mapCenter}
            zoom={this.state.zoom}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)} // "maps" is the mapApi. Bad naming but that's their library.
    
          >
            {/* Pin markers on the Map*/}
            {markers.map((marker, key) => {
              const { name, lat, lng } = marker;
              

              return (
                <MapMarker key={key} name={name} lat={lat} lng={lng}  />
              );
            })}
               
          </GoogleMapReact>
        </section>
        <section className="col-4">
          {mapsLoaded ?
            <div>
              {constraints.map((constraint, key) => {
                const { name, time } = constraint;
                return (
                  <div key={key} className="mb-4">
                    <div className="d-flex mb-2">
                    

                      <Input  className="col-4 mr-2" placeholder="Name" onChange={(event) => this.updateConstraintName(event, key)} />
                      <MapAutoComplete
                        autoCompleteService={autoCompleteService}
                        geoCoderService={geoCoderService}
                        germanyLatLng={germanyLatLng}
                        markerName={name}
                        addMarker={this.addMarker}
                        getLocation={this.getLocation}
                      />
                    </div>
                    <ConstraintSlider
                      iconType="car"
                      value={time}
                      onChange={(value) => this.updateConstraintTime(key, value)}
                      text="Minutes away by car"
                    />
                    <Divider />
                  </div>
                );
              })}
            </div>
            : null
          }
        </section>
        <div style={{"marginTop":"40px"}}>
        {/* Search Button */}
        <Button className="mt-4 fw-md" type="primary" size="large" onClick={this.handleSearch}>Search!</Button>
        
        </div>

        {/* Results section */}
        {searchResults.length > 0 ?
          <>
            <Divider />
            <section className="col-12">
              <div  className="d-flex flex-column justify-content-center">
                <h3  style={{'textAlign':"center"}} className="mb-4 fw-md">Woow! My favorite foods!</h3>
                <div className="d-flex flex-wrap">
                  {searchResults.map((result, key) => (
                    <PlaceCard info={result} key={key} />
                  ))}
                </div>
              </div>
            </section>
          </>
          : null}
      </div>
    )
  }
}

export default MapsContainer;