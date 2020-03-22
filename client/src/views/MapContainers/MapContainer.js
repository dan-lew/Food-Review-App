import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MapAutoComplete from "../../MapComponents/MapAutoComplete";
import MapMarker from "../../MapComponents/MapMarker";
import PlaceCard from "../../MapComponents/PlaceCard";
import ConstraintSlider from "../../MapComponents/ConstraintSlider";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Button, Input, Divider, message } from "antd";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";



const DE_COOR = { lat: 51.1657, lng: 10.4515 };
const API_KEY = "AIzaSyB6VLqKGeKFRhs_5UC3Tj-pRUVNmCYOiuI";

//const useStyles = makeStyles(styles);
//const classes = useStyles();
// console.log(classes)

class MapsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constraints: [{ name: "", time: 0 }],
      searchResults: [],
      mapsLoaded: false,
      markers: [],
      map: {},
      mapsApi: {},
      germanyLatLng: {},
      autoCompleteService: {},
      placesService: {},
      geoCoderService: {},
      directionService: {}
    };
  }

  //classes = useStyles();

  // Update name for constraint with index === key
  updateConstraintName = (event, key) => {
    event.preventDefault();
    const prevConstraints = this.state.constraints;
    const constraints = Object.assign([], prevConstraints);
    constraints[key].name = event.target.value;
    this.setState({ constraints });
  };

  // Updates distance (in KM) for constraint with index == key
  updateConstraintTime = (key, value) => {
    const prevConstraints = this.state.constraints;
    const constraints = Object.assign([], prevConstraints);
    constraints[key].time = value;
    this.setState({ constraints });
  };

  // Adds a Marker to the GoogleMaps component
  addMarker = (lat, lng, name) => {
    const prevMarkers = this.state.markers;
    const markers = Object.assign([], prevMarkers);
    console.log(markers);
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
      message.success(`Added new "${name}" Marker`);
    }

    this.setState({ markers });
  };

  // Runs once when the Google Maps library is ready
  // Initializes all services that we need
  apiHasLoaded = (map, mapsApi) => {
    this.setState({
      mapsLoaded: true,
      map,
      mapsApi,
      germanyLatLng: new mapsApi.LatLng(DE_COOR.lat, DE_COOR.lng),
      autoCompleteService: new mapsApi.places.AutocompleteService(),
      placesService: new mapsApi.places.PlacesService(map),
      geoCoderService: new mapsApi.Geocoder(),
      directionService: new mapsApi.DirectionsService()
    });
  };

  // With the constraints, find some places serving restaurant
  handleSearch = () => {
    const {
      markers,
      constraints,
      placesService,
      directionService,
      mapsApi
    } = this.state;
    if(markers.length === 0) {
      //message.warn("Add a constraint and try again!");
      console.log("Add a constraint and try again!")
      return;
    }
    const filteredResults = [];
    const marker = markers[0];
    const timeLimit = constraints[0].time;
    const markerLatLng = new mapsApi.LatLng(marker.lat, marker.lng);

    const placesRequest = {
      location: markerLatLng,
      // radius: '30000', // Cannot be used with rankBy. Pick your poison!
      type: ["ice cream", "cafe"], // List of types: https://developers.google.com/places/supported_types
      query: "restaurant",
      rankBy: mapsApi.places.RankBy.DISTANCE // Cannot be used with radius.
    };

    // First, search for restaurants shops.
    placesService.textSearch(placesRequest, response => {
      // Only look at the nearest top 20.
      const responseLimit = Math.min(20, response.length);
      for (let i = 0; i < responseLimit; i++) {
        const restaurantPlace = response[i];
        const { rating, name } = restaurantPlace;
        const address = restaurantPlace.formatted_address; 

        const priceLevel = restaurantPlace.price_level; // 1, 2, 3...
        let photoUrl = "";
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
          travelMode: "DRIVING"
        };
        directionService.route(directionRequest, (result, status) => {
          if (status !== "OK") {
            return;
          }
          const travellingRoute = result.routes[0].legs[0]; // { duration: { text: 1mins, value: 600 } }
          console.log("travellingRoute: ",travellingRoute)
          const travellingTimeInMinutes = travellingRoute.duration.value / 60;
          console.log("travellingTimeInMinutes: ", travellingTimeInMinutes)
          if (travellingTimeInMinutes < timeLimit) {
            const distanceText = travellingRoute.distance.text; // 6.
            console.log("distanceText: ",distanceText)
            const timeText = travellingRoute.duration.text; // 11 mins
            console.log("timeText: ", timeText)
            filteredResults.push({
              name,
              rating,
              address,
              openNow,
              priceLevel,
              photoUrl,
              distanceText,
              timeText
            });
            console.log("filteredResults")
          }
          // Finally, Add results to state
          this.setState({ searchResults: filteredResults });
        });
      }
    });
  };

  render() {
    const styleDiv = {
      width: "100%",
      height: "30%",
      display: "flex flexWrap",
      padding: "30px",
      justifyContent: "center"
    };
    const {
      constraints,
      mapsLoaded,
      germanyLatLng,
      markers,
      searchResults
    } = this.state;
    const { autoCompleteService, geoCoderService } = this.state; // Google Maps Services
    console.log("this.state: ", this.state)
    return (
      <div style={styleDiv}>
        <h1 className="w-100 fw-md">Find Some restaurants!</h1>
        {/* Constraints section */}
        <section className="col-4">
          {mapsLoaded ? (
            <div>
              {constraints.map((constraint, key) => {
                const { name, time } = constraint;
                return (
                  <div
                    key={key}
                    style={{ marginTop: "4px", marginBottom: "4px" }}
                    className=""
                  >
                    <div style={{ display: "d-flex" }} className="d-flex mb-2">
                      <Input
                        className="col-4 mr-2"
                        placeholder="Name"
                        onChange={event =>
                          this.updateConstraintName(event, key)
                        }
                      />
                      <MapAutoComplete
                        autoCompleteService={autoCompleteService}
                        geoCoderService={geoCoderService}
                        germanyLatLng={germanyLatLng}
                        markerName={name}
                        addMarker={this.addMarker}
                      />
                    </div>
                    <ConstraintSlider
                      iconType="car"
                      value={time}
                      onChange={value => this.updateConstraintTime(key, value)}
                      text="Minutes away by car"
                    />
                    <Divider />
                  </div>
                );
              })}
            </div>
          ) : null}
        </section>

        {/* Maps Section */}
        <section className="col-8 h-lg">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: API_KEY,
              libraries: ["places", "directions"]
            }}
            defaultZoom={6}
            defaultCenter={{ lat: DE_COOR.lat, lng: DE_COOR.lng }}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)} // "maps" is the mapApi. Bad naming but that's their library.
          >
            {/* Pin markers on the Map*/}

            {markers.map((marker, key) => {
              const { name, lat, lng } = marker;
              return <MapMarker key={key} name={name} lat={lat} lng={lng} />;
            })}

            {/* {markers.map((marker, key) => {
              const { name, lat, lng } = marker;
              const reastaurantPlace=this.state.filteredResults.address
              return (
                <MapMarker key={key} name={name} lat={lat} lng={lng} resPlace={reastaurantPlace} />
              );
            })} */}
          </GoogleMapReact>
        </section>

        {/* Search Button */}
        <Button
          className="mt-4 fw-md"
          type="primary"
          size="large"
          onClick={this.handleSearch}
        >
          Search!
        </Button>

        {/* Results section */}
        {searchResults.length > 0 ? (
          <>
            <Divider />
            <section className="col-12">
              <div className="d-flex flex-column justify-content-center">
                <h1 className="mb-4 fw-md">Woow! My favorite foods!</h1>
                <div className="d-flex flex-wrap">
                  {searchResults.map((result, key) => (
                    <PlaceCard info={result} key={key} />
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : null}
        {/* <GridContainer xs={12} md={8}>
           </GridContainer>       */}
      </div>
    );
  }
}

export default MapsContainer;
