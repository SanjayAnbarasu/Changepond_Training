import React, { useState } from 'react';

const FormValComp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); 

        if (firstName === "") {
            alert("Please enter First Name");
        } else if (lastName === "") {
            alert("Please enter Last Name");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters");
        } else {
            // This is where we show the data in the alert
            alert(
                `Data Submitted Successfully!\n` +
                `First Name: ${firstName}\n` +
                `Last Name: ${lastName}\n` +
                `Password: ${password}`
            );

            console.log("Full User Data:", { firstName, lastName, password });
            
            setFirstName("");
            setLastName("");
            setPassword("");
        }
    };

    return (
        <div style={{ margin: "20px", border: "2px solid blue", padding: "20px" }}>
            <h3>User Registration</h3>
            <form onSubmit={handleSubmit}>
                
                <label>First Name: </label>
                <input 
                    type="text" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                /><br/><br/>

                <label>Last Name: </label>
                <input 
                    type="text" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                /><br/><br/>

                <label>Password: </label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                /><br/><br/>

                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default FormValComp;
