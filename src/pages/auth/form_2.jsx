import React, { useState } from "react";
import axios from "axios";
import "./form.css"
import { Link, useNavigate } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Grid,
} from "@material-tailwind/react";

const apiUrl = "http://localhost:8080"
const ContactForm2 = () => {
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
    setShowOptions(event.target.value);
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
    <>
      {/* <img
      src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
      className="absolute inset-0 z-0 h-full w-full object-cover"
    /> */}
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[30rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-50 place-items-center"
          >
            <Typography variant="h3" color="white">
              Account Details
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Streamline ID" size="lg" id="sci" name="sci" value={formData.sci}
              onChange={handleChange}
              required />
            <Input label="Streamline Company Name" size="lg" id="scn" name="scn" value={formData.scn}
              onChange={handleChange}
              required />
            <Input type="text" label="Token Name" size="lg" id="email" name="tk" value={formData.tk}
              onChange={handleChange}
              required />
            <Input type="text" label="Token Secret" size="lg" id="address" name="ts" value={formData.ts}
              onChange={handleChange}
              required />
            <div className="-ml-2.5">
              <Checkbox label="Ring Central" id="ring"
                    name="options"
                    checked={selectedOption === "ring"}
                    onChange={handleChange}
                    value="ring"  />
              <Checkbox label="Twillio" id="twillio"
                    name="options"
                    checked={selectedOption === "twi"}
                    onChange={handleChange}
                    value="twi"/>
            </div> 
            {showOptions === "ring" && (
                <Input type="text" label="Ring Central" name="ringcentral" size="lg" id="ringcentral"
            value={formData.ringcentral}
            onChange={handleChange}
            required/>  
            )}    
            {showOptions === "twi" && (
                <Input type="text" label="Twillio" size="lg" name="twillio" id="twillio"
            value={formData.ringcentral}
            onChange={handleChange}
            required/>  
            )}      
          </CardBody>
          <CardFooter className="pt-0">
            <Link to="/dashboard">
                <Button variant="gradient" fullWidth>
              Sign Up
            </Button></Link>
          </CardFooter>
        </Card>
      </div>
    </>


  );
};

export default ContactForm2;

