import React, { useState } from "react";
import {TextField, Button, Select, MenuItem, FormControl, FormLabel} from "@mui/material";
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    phone: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>

    <h1 style={{textAlign: "center"}}> Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <FormLabel>First Name:</FormLabel>
          <TextField
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Last Name:</FormLabel>
          <TextField
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Email:</FormLabel>
          <TextField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>DOB:</FormLabel>
          <TextField
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Gender:</FormLabel>
          <Select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <MenuItem value="">Select Gender</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Phone:</FormLabel>
          <TextField
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            pattern="[0-9]{10}"
            required
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Password:</FormLabel>
          <TextField
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary" style={{marginTop: "20px"}}>
          Submit
        </Button>
      </form>

      {isSubmitted && (
        <div>
          <h2>Submitted Info:</h2>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Email: {formData.email}</p>
          <p>DOB: {formData.dob}</p>
          <p>Gender: {formData.gender}</p>
          <p>Phone: {formData.phone}</p>
          <p>Password: {formData.password}</p>
        </div>
      )}
    </div>
  );
};

export default App;
