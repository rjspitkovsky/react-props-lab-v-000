// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
      <h1>{this.props.name}</h1>
      <h2>{this.props.speed}</h2>
      <h3>{this.props.hasRockets}</h3>
      <h4>{this.props.colors}</h4>
      </div>
    )
  }
}

export default Spaceship

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black, red"]
};
