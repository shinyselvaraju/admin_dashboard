import React, { useState } from "react";
import axios from "axios";
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
export const Create = () => {

    //const navigate = useNavigate();

    const [formData, setFormData] = useState({
        accountname: "",
        email: "",
        name: "",
        website: "",
        address1: "",
        address2: "",
        password: "",
        city: "",
        zipcode: "",
        state: "",
        address1: "",
        address2: "",
        password: "",
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
            <div className="absolute  bg-white/50" />
            <div className="container mx-auto p-4">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-50 place-items-center"
                    onSubmit={handleSubmit}
                >
                    <Typography variant="h3" color="white">
                        Registration
                    </Typography>
                </CardHeader>
                <div className="flex w-96 pl-10 flex-col gap-4">
                    <Input label="Name" id="name" name="name" value={formData.name}
                        onChange={handleChange}
                        required />
                    <Input type="address" label="Address 1" size="md" name="address1" id="address1" value={formData.address1}
                        onChange={handleChange}
                        required />
                    <Input type="address" label="Address 2" size="md" name="address2" id="address2" value={formData.address2}
                        onChange={handleChange}
                    />
                    <div className="mb-2 flex gap-3">
                        <Input label="City" size="lg" name="city" id="city" value={formData.city}
                            onChange={handleChange}
                        />

                        <Input label="State" size="lg" name="state" id="state" value={formData.state}
                            onChange={handleChange}
                        />


                    </div>
                    <Input label="Zip Code" size="lg" name="zipcode" id="zipcode" value={formData.zipcode}
                        onChange={handleChange}
                    />
                    <Input label="Zip Code" size="lg" name="zipcode" id="zipcode" value={formData.zipcode}
                        onChange={handleChange}
                    />
                    <div className="mb-2 flex gap-3 w-33">
                        <Input type="email" label="Email" size="lg" name="email" id="email" value={formData.email}
                            onChange={handleChange}
                            required />
                        <Input type="phone" label="Phone" size="lg" id="phone" name="phone" value={formData.phone}
                            onChange={handleChange}
                            required />

                    </div>

                    <Input type="text" label="Website" size="lg" id="website" name="website" value={formData.website}
                        onChange={handleChange}
                        required />
                    <div className="flex w-max gap-4">
                        <Link to="/dashboard/streamline"> <Button variant="text">Streamline</Button></Link>
                        <Link to="/dashboard/sendsquared"><Button variant="text">Send Squared</Button></Link>
                        <Link to="/dashboard/highlevel"><Button variant="text">High Level</Button></Link>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Create;




