import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import apiKey from '../../data/api_key.js';
import Marker from './marker.jsx';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.selectedFlatCoordinates.lat}
            lng={this.props.selectedFlatCoordinates.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
