
import React, { useState } from "react";
import "./form.css"
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea
} from "@material-tailwind/react";
//const apiUrl = "http://localhost:8080"
export function Chats({setOpen}) {

  const [chatConfig, setChatConfig] = useState({})

  const handleChatConfig = (event) => {
    let t = { ...chatConfig }
    if (event.target.id === "conf-msg") {
      t.msg = event.target.value
    }
    if (event.target.value === "yes") {
      t.isRespond = true
    } else if (event.target.value === "no") {
      t.isRespond = true
    }
    if(event.target.name == "welcomemsg"){
      t.welcomeMsg = event.target.value
    }
    setChatConfig(t)
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
        <div style={{whiteSpace: "pre-wrap"}}><h3>Welcome Message:</h3><p>Available Tags:  {"{guest.firstname}, {guest.lastname}, {guest.res}, {guest.homename}, {guest.arrival_date}, {guest.departure_date}, {company_name}, {company_phone}, {company_email}"}</p></div>
        <Textarea label="Welcome Message:" name="welcomemsg" size="lg" value={chatConfig.welcomeMsg}
            onChange={handleChatConfig}
            required />
      </CardBody>
      <CardFooter className="pt-0">
        <div className="mb-2 flex gap-5 self-center">
          <Button variant="gradient"  onClick={handleSubmit} >
            Save
          </Button>
          <Button variant="gradient"  onClick={() => setOpen(false)} >
            cancel
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default Chats;
