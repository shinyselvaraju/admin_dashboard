import React, { useState } from "react";
import {
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

export const ContactForm4 = ({ formData, setFormData, handleSubmit, setPage}) => {

  const [highLevelData, setHighLevelData] = useState({
    type: "highlevel",
    company_id: "",
    api_token: "",
    client_key: "",
    client_secrect: "",
    phone_number: "",
  })

  const handleChange = (event) => {
    let tmp = {...highLevelData}
    tmp[event.target.name] = event.target.value
    setHighLevelData(tmp)
    setFormData({
      ...formData,
      ["account_type"]: tmp,
    });
  };

  return (
    <>
      <div className="bg-white/50" />
      <div className="container mx-auto p-4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-50 place-items-center"
          >
            <Typography variant="h3" color="white">
               HighLevel Account Details
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col w-96 gap-4">
            <Input label="Company ID" size="lg" id="company_id" name="company_id" value={highLevelData.company_id}
              onChange={handleChange}
              required />
            <Input label="API Token" size="lg" id="api_token" name="api_token" value={highLevelData.api_token}
              onChange={handleChange}
              required />
            <Input type="text" label="Client Key" size="lg" id="client_key" name="client_key" value={highLevelData.client_key}
              onChange={handleChange}
              required />
            <Input type="text" label="Client Secret" size="lg" id="client_secrect" name="client_secrect" value={highLevelData.client_secrect}
              onChange={handleChange}
              required /> 
            <Input type="text" label="Phone Number" size="lg" id="phone_number" name="phone_number" value={highLevelData.phone_number}
              onChange={handleChange}
              required />   
          </CardBody>
          <div className="space-x-10">
            <Button variant="gradient" className="w-96" onClick={handleSubmit}>
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

export default ContactForm4;