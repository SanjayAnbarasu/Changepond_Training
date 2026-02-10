import { Component } from "react";

class FunctionComp extends Component {
    constructor() {
        super();
        this.state = {
            fname: "sanjay",
            lname: "A",
            email: "sanjay@gmail.com",
            contact: "968219847",
            city: "Chennai",
        }
    }

    render() {
        return (
            <div className="main-content">
                <div className="view-card">
                    <h6>Class Component:</h6>
                    <p>First Name: <strong>{this.state.fname}</strong></p>
                    <p>Last Name: <strong>{this.state.lname}</strong></p>
                    <p>Email: <strong>{this.state.email}</strong></p>
                    <p>Contact: <strong>{this.state.contact}</strong></p>
                    <p>City: <strong>{this.state.city}</strong></p>
                </div>
            </div>
        )
    }
}

export default FunctionComp;
