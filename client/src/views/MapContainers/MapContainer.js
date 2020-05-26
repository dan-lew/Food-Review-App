import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MapAutoComplete from "../../MapComponents/MapAutoComplete";
import MapMarker from "../../MapComponents/MapMarker";
import PlaceCard from "../../MapComponents/PlaceCard";
import ConstraintSlider from "../../MapComponents/ConstraintSlider";
import { Input, Divider, message, Slider } from "antd";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import Geocode from "react-geocode";

const DE_COOR = { lat: 51.1657, lng: 10.4515 };
const API_KEY = "";

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
      directionService: {},
      lngPlace: [],
      latPlace: [],
      restName: [],
      mapCenter: { lat: 51.1657, lng: 10.4515 },
      zoom: 5.8,
      cityLocation: { lat: 0, lng: 0 },
    };
  }

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
    //
    console.log(lat, lng, name);
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
  };

  getLocation = (lat, lng) => {
    this.setState({ cityLocation: { lat: lat, lng: lng } });
  };
  setCenter = (lat, lng) => {
    const prevMarkers = this.state.markers;
    let markers = Object.assign([], prevMarkers);
    markers.shift();
    this.setState({
      markers: markers,
      mapCenter: {
        lat: lat,
        lng: lng,
      },
      zoom: 12,
    });
  };

  loadMarkers = (map, mapsApi, lat, lng, name) => {
    let content = `<p>${name}</p>`;
    let infoWindow = new mapsApi.InfoWindow({
      content: content,
    });
    let marker = new mapsApi.Marker({
      position: { lat, lng },
      map: map,
      title: name,
    });
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
    marker.addListener("Escape", () => {
      infoWindow.open(null);
    });
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
      directionService: new mapsApi.DirectionsService(),
    });
  };

  // With the constraints, find some places serving restaurant
  handleSearch = () => {
    const {
      cityLocation,
      constraints,
      placesService,
      directionService,
      map,
      mapsApi,
    } = this.state;
    if (cityLocation.lat === 0) {
      message.warn("Select a city and try again!");
      return;
    }
    const filteredResults = [];
    const timeLimit = constraints[0].time;
    const markerLatLng = new mapsApi.LatLng(cityLocation.lat, cityLocation.lng);

    const placesRequest = {
      location: markerLatLng,
      radius: "10000", // Cannot be used with rankBy. Pick your poison!
      type: ["food", "cafe"], // List of types: https://developers.google.com/places/supported_types
      query: "restaurant",
      //rankBy: mapsApi.places.RankBy.DISTANCE, // Cannot be used with radius.
    };
    const latPlace = [];
    const lngPlace = [];
    // First, search for restaurants shops.
    placesService.textSearch(placesRequest, (response) => {
      // Only look at the nearest top 20.
      const responseLimit = Math.min(30, response.length);
      const total_Addresses = [];

      for (let i = 0; i < responseLimit; i++) {
        const restaurantPlace = response[i];
        const { rating, name } = restaurantPlace;
        const address = restaurantPlace.formatted_address; // e.g 80 mandai Lake Rd,
        total_Addresses.push(address);
        console.log(restaurantPlace.geometry.viewport);
        latPlace[i] = restaurantPlace.geometry.viewport.Ya.i;
        lngPlace[i] = restaurantPlace.geometry.viewport.Ua.i;

        //this.addMarker(latPlace[i],lngPlace[i],restaurantPlace.name);
        this.loadMarkers(
          map,
          mapsApi,
          latPlace[i],
          lngPlace[i],
          restaurantPlace.name
        );
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
          travelMode: "DRIVING",
        };
        directionService.route(directionRequest, (result, status) => {
          if (status !== "OK") {
            return;
          }
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
          console.log(filteredResults);
          // Finally, Add results to state
          this.setState({ searchResults: filteredResults });
          console.log("this.state: ", this.state);
        });
      }
      this.setCenter(latPlace[0], lngPlace[0]);
      this.setState({
        latPlace: latPlace,
        lngPlace: lngPlace,
      });
    });
  };

  render() {
    const {
      constraints,
      mapsLoaded,
      germanyLatLng,
      markers,
      searchResults,
    } = this.state;
    const { autoCompleteService, geoCoderService } = this.state; // Google Maps Services
    return (
      <GridContainer
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        {/* <div className="w-100 d-flex py-4 flex-wrap justify-content-center"> */}

        <h3
          style={{
            margin: "35px",
            justifyContent: "center",
            textAlign: "center",
            color: "#9c27b0",
          }}
        >
          Find Some Restaurants!
        </h3>
        {/* Constraints section */}

        {/* Maps Section */}
        {/* <GridItem xs={12} sm={12} md={12} > */}
        <section
          style={{
            height: "450px",
            textAlign: "center",
            paddingLeft: "45px",
            justifyContent: "center",
          }}
          className="col-12 "
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: API_KEY,
              libraries: ["places", "directions"],
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

              return <MapMarker key={key} name={name} lat={lat} lng={lng} />;
            })}
          </GoogleMapReact>
        </section>
        {/* </GridItem> */}
        {/* <GridItem xs={12} sm={12} md={12} lg={12}> */}
        <section
          style={{ height: "250px", textAlign: "center", padding: "50px" }}
          className="col-8"
        >
          {mapsLoaded ? (
            <div>
              {constraints.map((constraint, key) => {
                const { name, time } = constraint;
                return (
                  <div key={key} className="mb-4">
                    <div className="d-flex mb-2">
                      <Input
                        className="col-4 mr-2"
                        placeholder="Country"
                        onChange={(event) =>
                          this.updateConstraintName(event, key)
                        }
                      />
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
                      onChange={(value) =>
                        this.updateConstraintTime(key, value)
                      }
                      text="minutes away by car"
                    />
                  </div>
                );
              })}
            </div>
          ) : null}
          {/* Search Button */}
          <Button
            className="fw-md"
            color="primary"
            size="sm"
            onClick={this.handleSearch}
          >
            Search!
          </Button>
        </section>
        {/* </GridItem> */}

        {/* Results section */}
        {searchResults.length > 0 ? (
          <>
            <Divider />
            <section className="col-12">
              <div className="d-flex flex-column justify-content-center">
                <h3 style={{ textAlign: "center" }} className="mb-4 fw-md">
                  Recommended Restaurants
                </h3>
                <div
                  style={{
                    textAlign: "center",
                    justifyContent: "space-evenly",
                  }}
                  className="d-flex flex-wrap"
                >
                  {searchResults.map((result, key) => (
                    <PlaceCard info={result} key={key} />
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : null}
        {/* </div> */}
      </GridContainer>
    );
  }
}

export default MapsContainer;
