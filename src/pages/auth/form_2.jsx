import React, { useState } from "react";
import axios from "axios";
import "./form.css"
import { Link, useNavigate, useLocation } from 'react-router-dom'
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

const apiUrl = "http://localhost:8081"
const ContactForm2 = () => {
  const location = useLocation();
  const { partialFormData } = location.state;
  // console.log(partialFormData)

  const [formData, setFormData] = useState(partialFormData)
  console.log(formData);
  // {
  //   accountname: "",
  //   email: "",
  //   name: "",
  //   website: "",
  //   address: "",
  //   phone: "",
  //   sci: "",
  //   scn: "",
  //   tk: "",
  //   ts: "",
  //   twilio: "",
  //   ringcentral: "",
  // });

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const navigate = useNavigate();



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
    console.log("formData");
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
    navigate("/dashboard");
  };


  return (
    <>
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
                value="ring" />
              <Checkbox label="Twillio" id="twillio"
                name="options"
                checked={selectedOption === "twi"}
                onChange={handleChange}
                value="twi" />
            </div>
            {showOptions === "ring" && (
              <Input type="text" label="Ring Central" name="ringcentral" size="lg" id="ringcentral"
                value={formData.ringcentral}
                onChange={handleChange}
                required />
            )}
            {showOptions === "twi" && (
              <Input type="text" label="Twillio" size="lg" name="twillio" id="twillio"
                value={formData.ringcentral}
                onChange={handleChange}
                required />
            )}
          </CardBody>
          <CardFooter className="pt-0">

            <Button variant="gradient" fullWidth onClick={handleSubmit} >

                Sign Up
              
            </Button>

          </CardFooter>
        </Card>
      </div>
    </>


  );
};

export default ContactForm2;

