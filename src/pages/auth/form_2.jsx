import React, { useState } from "react";
import {
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Radio,
} from "@material-tailwind/react";

export const ContactForm2 = ({ formData, setFormData, handleSubmit, setPage}) => {

  const [streamlineData, setStreamlineData] = useState({
    type: "streamline",
    streamline_id: "",
    streamline_company_name: "",
    token_key: "",
    token_secrect: "",
    api_type: {
      name: "",
      id: "",
      phone_number:"",
    }
  })

  const handleChange = (event) => {
    let tmp = {...streamlineData}
    tmp[event.target.name] = event.target.value
    setStreamlineData(tmp);
    setFormData({
      ...formData,
      ["account_type"]: tmp
    })
  };

  const handleRadio = (event) => {
    let tmp = {...streamlineData}
    let api_type = {
      name: event.target.value,
    }
    tmp["api_type"] = api_type
    setStreamlineData(tmp);
    setFormData({
      ...formData,
      ["account_type"]: tmp
    })
  }

  const handleInput = (event) => {
    let tmp = {...streamlineData}

    switch (event.target.name) {
      case "id":
        tmp.api_type.id = event.target.value
        break;
      case "phno":
        tmp.api_type.phone_number = event.target.value
        break
      default:
        break;
    }
    setStreamlineData(tmp);
    setFormData({
      ...formData,
      ["account_type"]: tmp
    })
  }

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
          <Input label="Streamline ID" name="streamline_id" value={streamlineData.streamline_id}
            onChange={handleChange}
            required />
          <Input label="Streamline Company Name" name="streamline_company_name" value={streamlineData.streamline_company_name}
            onChange={handleChange}
            required />
          <Input label="Token Key" name="token_key" value={streamlineData.token_key}
            onChange={handleChange}
            required />
          <Input label="Token Secret" name="token_secrect" value={streamlineData.token_secrect}
            onChange={handleChange}
            required />

          <div className="flex gap-10">
            <Radio
              name="type"
              label="Ring Central"
              // ripple={true}
              id="ring"
              checked={streamlineData.api_type.name === "ring"}
              onChange={handleRadio}
              value="ring"
            />
            <Radio
              name="type"
              label="Twillio"
              // ripple={false}
              id="twilio"
              checked={streamlineData.api_type.name === "twillio"}
              onChange={handleRadio}
              value="twillio"
            />
          </div>

          {streamlineData.api_type.name === "ring" && (
            <Input type="JWT/Phone Number" label="JWT" name="id"
              value={streamlineData.api_type.id}
              onChange={handleInput}
              required />
          )}
          {streamlineData.api_type.name === "ring" && (
            <Input type="JWT/Phone Number" label="Phone Number" name="phno" 
              value={streamlineData.api_type.phone_number}
              onChange={handleInput}
              required />
          )}
          {streamlineData.api_type.name === "twillio" && (
            <Input type="Sid/Phone Number" label="SID" name="id" 
              value={streamlineData.api_type.id}
              onChange={handleInput}
              required />
          )}
          {streamlineData.api_type.name === "twillio" && (
            <Input type="Sid/Phone Number" label="Phone Number" name="phno" 
              value={streamlineData.api_type.phone_number}
              onChange={handleInput}
              required />
          )}
        </CardBody>
        <div className="space-x-10">
        <Button variant="gradient" className="w-72" onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="gradient" onClick={() => setPage(-1)}>
              back
          </Button>
        </div>

      </div>
    </>


  );
};

export default ContactForm2;

