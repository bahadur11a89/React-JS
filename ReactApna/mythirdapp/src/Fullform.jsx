import React, { useState } from 'react'

export default function FullForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        gender: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form Submitted Successfully!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>

            {/* Name */}
            <label>Full Name:</label><br />
            <input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
            />
            <br /><br />

            {/* Email */}
            <label>Email:</label><br />
            <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
            />
            <br /><br />

            {/* Phone */}
            <label>Phone:</label><br />
            <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
            />
            <br /><br />

            {/* Gender */}
            <label>Gender:</label><br />
            <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
            /> Male

            <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
            /> Female

            <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
            /> Other

            <br /><br />

            <button type="submit">Submit</button>
        </form>
    )
}