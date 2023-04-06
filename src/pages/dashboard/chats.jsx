
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
//const apiUrl = "http://localhost:8080"
export function Chats() {

  const [sec1Input, setsec1Input] = useState("");

  const [showOptions2, setShowOptions2] = useState("");

  const [sec2Input, setsec2Input] = useState("");


  const [showOptions3, setShowOptions3] = useState("");

  const [sec3Input, setsec3Input] = useState("");


  const handleChangeSec2 = (event) => {

    setShowOptions2(event.target.value);
  };

  const handleChangeSec3 = (event) => {

    setShowOptions3(event.target.value);
  };

  const handleSec1Input = (event) => {
    setsec1Input(event.target.value)
  }
  const handleSec2Input = (event) => {
    setsec2Input(event.target.value)
  }

  const handleSec3Input = (event) => {
    setsec3Input(event.target.value)
  }

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
    // console.log(formData);
    console.log("Sec1 text: ", sec1Input)
    console.log("Sec2: ", showOptions2, " text: ", sec2Input)
    console.log("Sec3: ", showOptions3, " text: ", sec3Input)

    // console.log("Sec3: ", showOptions3)

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
              Chat Configuration
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Message when AI cannot reply " size="lg" id="sci" name="sci" value={sec1Input} onChange={handleSec1Input}
              required />

            <div className="-ml-2.5">
              <Checkbox label="Do not answer when guesterra doesnt know the answer" id="1"
                name="1"
                checked={showOptions2 === "1"}
                onChange={handleChangeSec2}
                value="1" />
              <Checkbox label="Answer when guesterra doesnt know the answer" id="1"
                name="2"
                checked={showOptions2 === "2"}
                onChange={handleChangeSec2}
                value="2" />

              {showOptions2 === "1" && (

                <></>

              )}
              {showOptions2 === "2" && (


                <Input label="Message you want to enter" size="lg" id="scn" name="scn"
                  required onChange={handleSec2Input} value={sec2Input}/>
              )}

            </div>

            <h3>DO YOU WANT TO RESPOND TO THE USER WHEN GUESTERRA CANNOT ANSWER?</h3>


            <div className="-ml-2.5">
              <Checkbox label="Yes" 
                name="options"
                checked={showOptions3 === "1"}
                onChange={handleChangeSec3}
                value="1" />
              <Checkbox label="No" 
                name="options"
                checked={showOptions3 === "2"}
                onChange={handleChangeSec3}
                value="2" />
            </div>

            {showOptions3 === "1" && (
              <Input type="text" label="Enter the message:" name="ringcentral" size="lg" value={sec3Input}
                onChange={handleSec3Input}
                required />
            )}
            {showOptions3 === "2" && (
              <></>
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
export default Chats;
