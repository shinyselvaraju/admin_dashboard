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
export const ContactForm3 = () => {
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
    

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");


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
               SendSquared Account Details
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Company ID" size="lg" id="sendid" name="sendid" value={formData.sendid}
              onChange={handleChange}
              required />
            <Input label="Token" size="lg" id="sendtoken" name="sendtoken" value={formData.sendtoken}
              onChange={handleChange}
              required />
            <Input type="text" label="Phone Number" size="lg" id="sendphone" name="sendphone" value={formData.sendphone}
              onChange={handleChange}
              required />
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

export default ContactForm3;

