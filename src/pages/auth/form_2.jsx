import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
  Radio,
} from "@material-tailwind/react";


const apiUrl = "http://localhost:8080"
export const ContactForm2 = () => {
  const [formData, setFormData] = useState({
    accountname: "",
    email: "",
    name: "",
    website: "",
    address1: "",
    address2: "",
    city: "",
    zipcode: "",
    state: "",
    phone: "",
    sci: "",
    scn: "",
    tk: "",
    ts: "",
    twilio: "",
    ringcentral: "",
    highid: "",
    hightoken: "",
    highkey: "",
    highsecret: "",
    highphone: "",
    sendid: "",
    sendtoken: "",
    sendphone: "",
  });


  const [showOptions, setShowOptions] = useState("");
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
    setShowOptions(event.target.value);
  };

  const apiHandleChange = (event) =>{
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

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
    <>
      {/* <img
      src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
      className="absolute inset-0 z-0 h-full w-full object-cover"
    /> */}
      <div className=" bg-white/50" />
      <div className="container mx-auto p-4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-50 place-items-center"
          >
            <Typography variant="h3" color="white">
               Streamline Account Details
            </Typography>
          </CardHeader>
          <CardBody className="w-96 flex flex-col gap-4">
            <Input label="Streamline ID"  name="sci" value={formData.sci}
              onChange={handleChange}
              required />
            <Input label="Streamline Company Name"   name="scn" value={formData.scn}
              onChange={handleChange}
              required />
            <Input  label="Token Key"  name="tk" value={formData.tk}
              onChange={handleChange}
              required />
            <Input  label="Token Secret"   name="ts" value={formData.ts}
              onChange={handleChange}
              required />
            
                <div className="flex gap-10">
                    <Radio
                      name="type"
                      label="Ring Central"
                      // ripple={true}
                      id="ring"
                      checked={selectedOption === "ring"}
                      onChange={handleChange}
                      value="ring" 
                    />
                    <Radio
                      name="type"
                      label="Twillio"
                      // ripple={false}
                      id="twilio"
                      checked={selectedOption === "twi"}
                      onChange={handleChange}
                      value="twi"
                    />
                </div>
            
            {showOptions === "ring" && (
                <Input type="JWT/Phone Number" label="Ring Central" name="ringcentral"  id="ringcentral"
            value={formData.ringcentral}
            onChange={apiHandleChange}
            required/>  
            )}    
            {showOptions === "twi" && (
                <Input type="Sid/Phone Number" label="Twilio"  name="twilio" id="twilio"
            value={formData.twilio}
            onChange={apiHandleChange}
            required/>  
            )}      
          </CardBody>
  
            <Link to="/dashboard">
                <Button variant="gradient" className="w-72">
              Save
            </Button></Link>
      </div>
    </>


  );
};

export default ContactForm2;

