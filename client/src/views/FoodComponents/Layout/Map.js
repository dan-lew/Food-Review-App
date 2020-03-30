import React from 'react'
const _ = require("lodash");

const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
//const Restaurant="Hofbräu Wirtshaus Wandsbek"
//const Restaurant="Bistro Samarkand"
const Restaurant="RISTORÌ da Franco"
// const Restaurant="Vapiano Jungfernstieg"
// const Restaurant="Vapiano Hallerstrasse"
//const Restaurant="Restaurant Dubrovnik Rennbahnstrasse"
const Map = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1R-U-DEGLzPr-e8z1TwW_p0K27Zmu7ic&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: '100%'}} />,
      containerElement: <div style={{ height: "350px", width:"100%" }} />,
      mapElement: <div style={{ height: "100%" }} />,
    }),
    lifecycle({
      componentWillMount() {
        const refs = {}
  
        this.setState({
          bounds: null,
          center: {
            lat: 53.57, lng: 9.99
          },
          markers: [],
          onMapMounted: ref => {
            refs.map = ref;
          },
          onBoundsChanged: () => {
            this.setState({
              bounds: refs.map.getBounds(),
              center: refs.map.getCenter(),
            })
          },
          onSearchBoxMounted: ref => {
            refs.searchBox = ref;
          },
          onPlacesChanged: () => {
            const places = refs.searchBox.getPlaces();
            const bounds = new window.google.maps.LatLngBounds();
  
            places.forEach(place => {
              if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport)
              } else {
                bounds.extend(place.geometry.location)
              }
            });
            const nextMarkers = places.map(place => ({
              position: place.geometry.location,
            }));
            const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
  
            this.setState({
              center: nextCenter,
              markers: nextMarkers,
            });
            // refs.map.fitBounds(bounds);
          },
        })
      },
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={15}
      center={props.center}
      onBoundsChanged={props.onBoundsChanged}
    >
      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        controlPosition={window.google.maps.ControlPosition.TOP_RIGHT}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input
          type="text"
          style={{
            boxSizing: 'border-box',
            border: '1px solid transparent',
            width: '240px',
            height: '40px',
            marginTop: '50px',
            marginLeft:'150px',
            padding: '0 12px',
            borderRadius: '3px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
            fontSize: '16px',
            outline: 'none',
            textOverflow: 'ellipses',

          }}
          placeholder="Search for Restaurant"
        />
      </SearchBox>
      {props.markers.map((marker, index) =>
        <Marker key={index} position={marker.position} />
      )}
    </GoogleMap>
  );
  
export default Map;