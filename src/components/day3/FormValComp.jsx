import React, { useState } from 'react';

const FormValComp = () => {
    const [user, setUser] = useState({ firstName: "", lastName: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value.trim() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!user.firstName) return alert("Please enter First Name");
        if (!user.lastName) return alert("Please enter Last Name");
        if (user.password.length < 6) return alert("Password must be at least 6 characters");

        alert(`Success!\nName: ${user.firstName} ${user.lastName}`);
        console.log(user);
        setUser({ firstName: "", lastName: "", password: "" });
    };

    return (
        <div style={{ margin: "20px", border: "2px solid blue", padding: "20px" }}>
            <h3>User Registration</h3>
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
