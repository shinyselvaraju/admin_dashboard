import React, { useState } from "react";
import axios from "axios";
import "./form.css"
import { Link, useNavigate } from 'react-router-dom'
const apiUrl = "http://localhost:8080"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    accountname: "",
    email: "",
    name: "",
    website: "",
    address: "",
    phone: "",
    sci: "",
    scn: "",
    tk: "",
    ts: "",
    twilio: "",
    ringcentral: "",
  });

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   setShowOptions(event.target.value );
  // };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setSelectedOption(event.target.value);
    setShowOptions(event.target.value );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server or handle form submission
    axios({
      method: "post",
      url: apiUrl + "/save",
      data: {
        formData: formData
      }
    })
    console.log(formData);
  };

  return (
    <div className="contact-form-container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Account Name:</label>
          <input
            type="text"
            id="accountname"
            name="accountname"
            value={formData.accountname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="name">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
           <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <div className="form-field">
          <label htmlFor="name">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="name">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="name">Streamline Company Id</label>
          <input
            type="text"
            id="sci"
            name="sci"
            value={formData.sci}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="name">Streamline Company Name</label>
          <input
            type="text"
            id="scn"
            name="scn"
            value={formData.scn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="name">Token Key</label>
          <input
            type="text"
            id="tk"
            name="tk"
            value={formData.tk}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="name">Token Secret</label>
          <input
            type="text"
            id="ts"
            name="ts"
            value={formData.ts}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="name">Twilio</label>
          <input
            type="radio"
            id="twilio"
            name="options"
            checked={selectedOption === "twi"}
            onChange={handleChange}
            //value={formData.twilio}
            value="twi"    
          /> 
          <label htmlFor="name">Ring</label>
          <input
            type="radio"
            id="twilio"
            name="options"
            checked={selectedOption === "ring"}
            onChange={handleChange}
            //value={formData.twilio}
            value="ring"    
          /> 
        </div>
        {showOptions === "twi" && (
        
        <div className="form-field">
          <label htmlFor="name">Twilio</label>
          <input
            type="text"
            id="twilio"
            name="twilio"
            value={formData.twilio}
            onChange={handleChange}
            required
          />
        </div>
        
      )}
      {showOptions === "ring" && (
        <div className="form-field">
          <label htmlFor="name">Ring Central</label>
          <input
            type="text"
            id="ringcentral"
            name="ringcentral"
            value={formData.ringcentral}
            onChange={handleChange}
            required
          />
        </div>
        )}
       
        <Link to="/dashboard"><button type="submit">Submit</button></Link>
      </form>
    </div>

    
  );
};

export default ContactForm;
