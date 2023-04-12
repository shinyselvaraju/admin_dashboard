import React, { useState } from "react";
import {ContactForm1, ContactForm2, ContactForm3, ContactForm4} from "../auth"
import axios from "axios";

const apiUrl = "http://localhost:8081"
export const Create = () => {
    const [formData, setFormData] = useState({
        name: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        zipcode: "",
        email: "",
        phone: "",
        website: "",
        account_type: {}
    });

    const [page, setPage] = useState(-1)

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send form data to server or handle form submission
        axios({
          method: "post",
          url: apiUrl + "/save",
          data: {
            formData: formData
          }
        }).then((res) => {
          console.log(res.data)
        }).catch((err) => {
          // console.log("Some error occured! ", err.response.data.error)
          if(err.response.data.error.code === 11000){
            console.log("Some error occured! ", err.response.data.error)
            alert(`Name '${formData.name}' is already taken`)
          }
        })
        console.log(formData);
      };

    const conditionalComponent = () => {
        switch (page) {
         case 0:
            return <ContactForm2 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} setPage={setPage}/>;
          case 1:
           return <ContactForm3 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} setPage={setPage}/>;
         case 2:
           return <ContactForm4 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} setPage={setPage}/>;
         default:
           return <ContactForm1 formData={formData} setFormData={setFormData} setPage={setPage}/>;
       }
     };

    return (
        <>
            {conditionalComponent()}
        </>


    );
};

export default Create;




