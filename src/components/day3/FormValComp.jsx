import React, { useState } from 'react';

const FormValComp = () => {
    const [user, setUser] = useState({ firstName: "", lastName: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value.trim() });
    };

    // THIS IS THE SUBMIT LOGIC IN THE SAME FILE
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the page from refreshing
        
        // 1. Basic Validation
        if (!user.firstName || !user.lastName) return alert("Please enter Full Name");
        if (user.password.length < 6) return alert("Password must be 6+ characters");

        try {
            // 2. Send the data to your local db.json via POST
            const response = await fetch('http://localhost:5555/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                alert("Saved successfully to db.json!");
                // 3. Reset the form fields
                setUser({ firstName: "", lastName: "", password: "" });
            } else {
                alert("Server error: Could not save data.");
            }
        } catch (error) {
            console.error("Connection Error:", error);
            alert("Is your JSON Server running on port 5555?");
        }
    };

    return (
        <div style={{ margin: "20px", border: "2px solid blue", padding: "20px" }}>
            <h3>User Registration</h3>
            {/* The onSubmit here calls the function we just wrote above */}
            <form onSubmit={handleSubmit}>
                <input name="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange} /><br/><br/>
                <input name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} /><br/><br/>
                <input name="password" type="password" placeholder="Password" value={user.password} onChange={handleChange} /><br/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormValComp;
