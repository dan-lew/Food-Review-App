import  {AutoComplete}  from 'antd';
import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete';

class MapAutoComplete extends Component {
  
  // Runs a search on the current value as the user types in the AutoComplete field.
  handleSearch = ((value) => {
    const { autoCompleteService, singaporeLatLng } = this.state;
    
    // Search only if there is a string
    if (value.length > 0) {
      const searchQuery = {
        input: value,
        location: singaporeLatLng, // Search within Singapore
        radius: 30000, // in Meters. 30km
      };
      autoCompleteService.getQueryPredictions(searchQuery, ((response) => {
        // The name of each GoogleMaps place suggestion is in the "description" field
        if (response) {
          const dataSource = response.map((resp) => resp.description);
          this.setState({ dataSource, suggestions: response });
        }
      }));
    }
  });

  // Runs after clicking away from the input field or pressing 'enter'.
  // GeocoderService helps us get the lng & lat given an address name.
  onSelect = ((value) => {
    this.state.geoCoderService.geocode({ address: value }, ((response) => {
      const { location } = response[0].geometry;
      this.props.addMarker(location.lat(), location.lng(), this.props.markerName);
    }))
  });

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        onSearch={this.handleSearch}
        onSelect={this.onSelect}
        placeholder="City"
      />
    )
  }
}
export default MapAutoComplete;