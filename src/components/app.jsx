import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import Map from './map.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlatCoordinates: {
        lat: 48.884211,
        lng: 2.34689
      }
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({
      selectedFlatCoordinates: {
        lat: lat,
        lng: lng
      }
    });
  }

  render() {
    return (
      <div>
        <FlatList selectFlat={this.selectFlat} />
        <div className="map-container">
          <Map selectedFlatCoordinates={this.state.selectedFlatCoordinates} />
        </div>
      </div>
    )
  }
}

export default App;
