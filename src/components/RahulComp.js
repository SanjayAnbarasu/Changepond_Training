import React, { Component } from 'react'

class RahulComp extends Component {
  render() {
    // const{fname,lname,email,contact,city}=this.props;
    return (
      <div>
        <h4>this is class component</h4>
        <p>First name : <strong>{this.props.fname}</strong></p>
        <p>Last name  : <strong>{this.props.lname}</strong></p>
        <p>Email : <strong>{this.props.email}</strong></p>
        <p>Contact number : <strong>{this.props.contact}</strong></p>
        <p>City : <strong>{this.props.city}</strong></p>
      </div>
    )
  }
}

export default RahulComp
