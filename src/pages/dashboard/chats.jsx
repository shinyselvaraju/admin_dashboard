
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
  Dialog,
} from "@material-tailwind/react";
//const apiUrl = "http://localhost:8080"
export function Chats() {

  const [chatConfig, setChatConfig] = useState({})

  const handleChatConfig = (event) => {
    if (event.target.id === "conf-msg") {
      console.log(chatConfig.msg)
      let t = { ...chatConfig }
      t.msg = event.target.value
      setChatConfig(t)
    }
    if (event.target.value === "yes") {
      setChatConfig({ isRespond: true, msg: "" })
    } else if (event.target.value === "no") {
      setChatConfig({ isRespond: false, msg: "" })
    }
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // // Send form data to server or handle form submission
    // axios({
    //   method: "post",
    //   url: apiUrl + "/save",
    //   data: {
    //     formData: formData
    //   }
    // })
  };


  return (
    <Card className="mx-auto w-full max-w-[66rem] h-full">
      <CardBody className="flex flex-col gap-4">
        <Typography variant="h5" color="black">
          CHAT CONFIGURATION
        </Typography>
        <h3>Do you want to respond to the user when Guesterra cannot answer?</h3>
        <div className="-ml-2.5 self-stretch">
          <Checkbox label="Yes"
            name="options"
            checked={chatConfig.isRespond === true}
            onChange={handleChatConfig}
            value="yes" />
          <Checkbox label="No"
            name="options"
            checked={chatConfig.isRespond === false}
            onChange={handleChatConfig}
            value="no" />
        </div>

        {chatConfig.isRespond === true && (
          <Input type="text" id="conf-msg" label="Enter the message:" name="ringcentral" size="lg" value={chatConfig.msg}
            onChange={handleChatConfig}
            required />
        )}
        {chatConfig.isRespond === false && (
          <></>
        )}
      </CardBody>
      <CardFooter className="pt-0">
        <div className="mb-2 flex gap-3 self-center">
          <Button variant="gradient" fullWidth onClick={handleSubmit} >
            Save
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default Chats;
