import React, { Component } from 'react'

class RahulComp extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="view-card">
          <h6>This is class component</h6>
          <p>First name : <strong>{this.props.fname}</strong></p>
          <p>Last name  : <strong>{this.props.lname}</strong></p>
          <p>Email : <strong>{this.props.email}</strong></p>
          <p>Contact number : <strong>{this.props.contact}</strong></p>
          <p>City : <strong>{this.props.city}</strong></p>
        </div>
      </div>
    )
  }
}

export default RahulComp
