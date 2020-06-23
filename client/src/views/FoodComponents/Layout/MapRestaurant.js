import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MapAutoComplete from "../../../MapComponents/MapAutoComplete";
import MapMarker from "../../../MapComponents/MapMarker";
import { Input, Divider, message, Slider } from "antd";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import Geocode from "react-geocode";

const HAM_COOR = { lat: 55.57, lng: 9.99 };
const API_KEY = "AIzaSyD-wdqyhQAUQRDABkb3xKrCAV7Eg6eipvw";

export const Restaurant = (props) => {
  console.log(props.name);
  return props.name;
};
const constraints = { name: "", city: "" };
var nameRestaurant = "";

class Map extends Component {
  constructor(props) {
    super(props);
    console.log("MAP: ", props);
    this.state = {
      constraints: [{ name: props.google.location.state, city: "Hamburg" }],
      searchResults: [],
      mapsLoaded: false,
      markers: [],
      map: {},
      mapsApi: {},
      germanyLatLng: {},
      autoCompleteService: {},
      placesService: {},
      geoCoderService: {},
      lngPlace: [],
      latPlace: [],
      restName: [],
      mapCenter: { lat: 53.57, lng: 9.99 },
      zoom: 12,
      cityLocation: { lat: 0, lng: 0 },
    };
    this.setState({
      name: props.google.location.state,
      city: "Hamburg",
    });
    nameRestaurant = this.state.constraints[0].name;
  }

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
        break;
      }
    }
    // Name does not exist in marker list. Create new marker
    if (newMarker) {
      markers.push({ lat, lng, name });
    }

    this.setState({ markers });
  };

  //getting location from restaurant

  getLocation = () => {
    this.state.geoCoderService.geocode({ address: "Hamburg,Germany" }, response => {
      const { location } = response[0].geometry;
      //this.props.addMarker(location.lat(), location.lng(), this.props.markerName);
      this.setState({ cityLocation: { lat:location.lat(), lng:location.lng() } });
      this.handleSearch({lat:location.lat(), lng:location.lng()})
    });
  }

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

  loadMarkers = (map, mapsApi, lat, lng, name, formatted_address, rating) => {
    let content = `<p style="color:#9c27b0;font-weight: bold; font-size:1.5em">${name}</p><p>Address: ${formatted_address}<br> Rating: ${rating}</p>`;
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
  apiHasLoaded = async (map, mapsApi) => {
    await this.setState({
      mapsLoaded: true,
      map,
      mapsApi,
      germanyLatLng: new mapsApi.LatLng(HAM_COOR.lat, HAM_COOR.lng),
      autoCompleteService: new mapsApi.places.AutocompleteService(),
      placesService: new mapsApi.places.PlacesService(map),
      geoCoderService: new mapsApi.Geocoder(),
    });
    console.log(this.state);
    this.getLocation()

  };

  // With the constraints, find some places serving restaurant
  handleSearch = (cityLocation) => {
    const {
      constraints,
      placesService,
      // directionService,
      map,
      mapsApi,
    } = this.state;
    if (cityLocation.lat === 0) {
      message.warn("Select a city and try again!");
      return;
    }

    const markerLatLng = new mapsApi.LatLng(cityLocation.lat, cityLocation.lng);
    console.log("nameRestaurant: ", nameRestaurant);
    const placesRequest = {
      location: markerLatLng,
      query: nameRestaurant,
      fields: ["name", "geometry", "type", "formatted_address"], //rankBy: mapsApi.places.RankBy.DISTANCE, // Cannot be used with radius.
    };
    const latPlace = [];
    const lngPlace = [];

    // First, search for restaurants shops.
    placesService.textSearch(placesRequest, (response) => {
      // Only look at the nearest top 20.
      const responseLimit = Math.min(6, response.length);
      const total_Addresses = [];

      for (let i = 0; i < responseLimit; i++) {
        const restaurantPlace = response[i];
        const { rating, name, formatted_address, url } = restaurantPlace;
        const address = restaurantPlace.formatted_address;
        total_Addresses.push(address);

        latPlace[i] = restaurantPlace.geometry.viewport.Ya.i;
        lngPlace[i] = restaurantPlace.geometry.viewport.Ua.i;
        this.loadMarkers(
          map,
          mapsApi,
          latPlace[i],
          lngPlace[i],
          restaurantPlace.name,
          restaurantPlace.formatted_address,
          restaurantPlace.rating
        );
        console.log("restaurantPlace : ", restaurantPlace);
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
    console.log("name", constraints);
    return (
      <GridContainer
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        {/* Maps Section */}
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
            defaultZoom={12}
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
        <section
          style={{ height: "250px", textAlign: "center",alignItems:"center", paddingTop: "50px" }}
          className="col-12"
        >
          {mapsLoaded ? (
            <div>
              {constraints.map((constraint, key) => {
                console.log(constraint);
                const { name, city } = constraint;
                console.log("name: ", name);
                return (
                  <div key={key} className="mb-4">
                    <div className="d-flex mb-2">
                      {/* <Input
                       style={{width:"100px"}}
                        className="col-5   mr-2"
                        placeholder="Country"
                        value={"germany"}
                      /> */}
                      {/* <MapAutoComplete
                        autoCompleteService={autoCompleteService}
                        geoCoderService={geoCoderService}
                        germanyLatLng={germanyLatLng}
                        markerName={name}
                        addMarker={this.addMarker}
                        getLocation={this.getLocation}
                      /> */}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
          {/* Search Button */}
          {/* <Button
            style={{textAlign:"center"}}
            color="primary"
            size="sm"
            onClick={this.handleSearch}
          >
            Show <br></br> {this.state.constraints[0].name}<br></br> on the Map
          </Button> */}
        </section>
        {/* </GridItem> */}

        {/* Results section */}
        {searchResults.length > 0 ? (
          <>
            <Divider />
            <section className="col-12">
              <div className="d-flex flex-column justify-content-center">
                <div
                  style={{
                    textAlign: "center",
                    justifyContent: "space-evenly",
                  }}
                  className="d-flex flex-wrap"
                >
                  {searchResults.map((result, key) => (
                    <div>{result}</div>
                    //   <PlaceCard info={result} key={key} />
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

export default Map;
