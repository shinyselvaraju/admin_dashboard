import React from "react";
import {
    CardHeader,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

export const ContactForm1 = ({ formData, setFormData, setPage }) => {
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <div className="absolute  bg-white/50" />
            <div className="container mx-auto p-4">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-50 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Registration
                    </Typography>
                </CardHeader>
                <div className="flex w-96 pl-10 flex-col gap-4">
                    <Input label="Name" id="name" name="name" value={formData.name}
                        onChange={handleChange}
                        required />
                    <Input type="address" label="Address 1" size="md" name="address_1" id="address_1" value={formData.address_1}
                        onChange={handleChange}
                        required />
                    <Input type="address" label="Address 2" size="md" name="address_2" id="address_2" value={formData.address_2}
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
                        <Input label="Email" size="lg" name="email" id="email" value={formData.email}
                            onChange={handleChange}
                            required />
                        <Input type="phone" label="Phone" size="lg" id="phone" name="phone" value={formData.phone}
                            onChange={handleChange}
                            required />

                    </div>

                    <Input label="Website" size="lg" id="website" name="website" value={formData.website}
                        onChange={handleChange}
                        required />
                    <div className="flex w-max gap-4">
                        <Button variant="text" onClick={() => setPage(0)}>Streamline</Button>
                        <Button variant="text" onClick={() => setPage(1)}>Send Squared</Button>
                        <Button variant="text" onClick={() => setPage(2)}>High Level</Button>
                    </div>
                </div>
            </div>
        </>


    );
};

export default ContactForm1;




