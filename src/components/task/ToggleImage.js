import React, { Component } from 'react';
import Burger from '../../shared/images/Burger.jpg';
import Icecream from '../../shared/images/Icecream.jpg';

class ToggleImage extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const imagelink = this.state.show ? Burger : Icecream;

    return (
      <div>
        <img
          src={imagelink}
          alt="img"
          width="250"
          style={{ maxHeight: "250px" }}
        />
        <br />
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}

export default ToggleImage;
