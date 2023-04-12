import React, { useState } from "react";
import {
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";



export const ContactForm3 = ({ formData, setFormData, handleSubmit, setPage}) => {

  const [sendSquaredData, setSendSquaredData] = useState({
    type: "sendsquared  ",
    company_id: "",
    token: "",
    phone_number: ""
  })
  
  const handleChange = (event) => {
    let tmp = {...sendSquaredData}
    tmp[event.target.name] = event.target.value
    setSendSquaredData(tmp) 
    setFormData({
      ...formData,
      ["account_type"]: tmp,
    });
  };


  return (
    <>
      {/* <img
      src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
      className="absolute inset-0 z-0 h-full w-full object-cover"
    /> */}
      <div className="bg-white/50" />
      <div className="container mx-auto p-4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-50 place-items-center"
          >
            <Typography variant="h3" color="white">
               SendSquared Account Details
            </Typography>
          </CardHeader>
          <CardBody className="flex w-96 flex-col gap-4">
            <Input label="Company ID" size="lg" id="company_id" name="company_id" value={sendSquaredData.company_id}
              onChange={handleChange}
              required />
            <Input label="Token" size="lg" id="token" name="token" value={sendSquaredData.token}
              onChange={handleChange}
              required />
            <Input type="text" label="Phone Number" size="lg" id="phone_number" name="phone_number" value={sendSquaredData.phone_number}
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

export default ContactForm3;

