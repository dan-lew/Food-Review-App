import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { AutoComplete } from 'antd';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

//  const useStyles = makeStyles(styles);
//  const classes = useStyles();

class MapAutoComplete extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      suggestionts: [],
      dataSource: [],
      germanyLatLng: this.props.germanyLatLng,
      autoCompleteService: this.props.autoCompleteService,
      geoCoderService: this.props.geoCoderService,
    }
  }

  // Runs after clicking away from the input field or pressing 'enter'.
  // Geocode the location selected to be created as a marker.
  onSelect = ((value) => {
    this.state.geoCoderService.geocode({ address: value }, ((response) => {
      console.log(response[0]);
      const { location } = response[0].geometry;
      console.log(location);
      this.props.addMarker(location.lat(), location.lng(), this.props.markerName);
    }))
  });


  // Runs a search on the current value as the user types in the AutoComplete field.
  handleSearch = ((value) => {
    const { autoCompleteService, germanyLatLng } = this.state;
    // Search only if there is a string
    if (value.length > 0) {
      const searchQuery = {
        input: value,
        location: germanyLatLng, // Search in Germany
        radius: 30000, // With a 30km radius
      };
      autoCompleteService.getQueryPredictions(searchQuery, ((response) => {
        // The name of each GoogleMaps suggestion object is in the "description" field
        if (response) {
          const dataSource = response.map((resp) => resp.description);
          this.setState({ dataSource, suggestions: response });
        }
      }));
    }
  });

  render() {
 
    
   
    return (
      <AutoComplete
        style={{width:"100%"}}
        className=""
        // className={classes.width100}
        dataSource={this.dataSource}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        placeholder="Address"
      />
    );
  }
}

export default MapAutoComplete;