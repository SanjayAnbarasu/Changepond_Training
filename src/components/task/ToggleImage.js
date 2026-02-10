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