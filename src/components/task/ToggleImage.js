<<<<<<< HEAD
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
=======
import React, { Component } from 'react'
import samosa from '/Vs_coding/Work_File/src/shared/images/samosa.png';
import idly from '/Vs_coding/Work_File/src/shared/images/idly.png';


class ToggleImage extends Component {
    constructor(){
    super();
    this.state={
        show:true
    };
    }

     toggle=()=>{
        this.setState({
            show:!this.state.show
        })
    }
  render() {

     let imagelink;
     if(this.state.show){
        imagelink=samosa
     }
     else{
        imagelink=idly
     }
    return (
      <div>
        <img  src={imagelink} alt="img" className='img1'/><br></br>
        <button onClick={this.toggle} className='but1'>Toggle </button>
      </div>
    )
  }
}

export default ToggleImage
>>>>>>> 28adfcf0eefb598d1d0feb25212d8cfa152f5d3d
