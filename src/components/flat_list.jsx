import React, { Component } from 'react';

import flats from '../../data/flats.js';
import Flat from './flat.jsx';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat name={flat.name} price={flat.price} imageUrl={flat.imageUrl} lat={flat.lat} lng={flat.lng} selectFlat={props.selectFlat} />)}
    </div>
  );
};

export default FlatList;
