import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    if (this.props.selectFlat) {
      this.props.selectFlat(this.props.lat, this.props.lng);
    }
  }

  render() {
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.imageUrl}')` }} onClick={this.handleClick}>
        <p className="card-category">{this.props.price}</p>
        <h2 className="card-description">{this.props.name}</h2>
      </div>
    );
  }
}

export default Flat;
