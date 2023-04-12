const models = require('./models')

module.exports.deleteAll = async (req,res) => {
    const register = await models.deleteMany({})
    res.send(register)
}

module.exports.getregister = async (req,res) => {
    const register = await models.find()
    res.send(register)
}

module.exports.getUsers = async (req,res) => {
    const register = await models.find()
    res.send(register)
}

module.exports.saveregister = async (req,res) => {
    const RegistrationDetails  = req.body.formData
    // console.log(req)
    models
    .create({
        name: RegistrationDetails.name,
        address_1: RegistrationDetails.address_1,
        address_2: RegistrationDetails.address_2,
        city: RegistrationDetails.city,
        state: RegistrationDetails.state,
        zipcode: RegistrationDetails.zipcode,
        email: RegistrationDetails.email,
        phone: RegistrationDetails.phone,
        website: RegistrationDetails.website,
        account_type: RegistrationDetails.account_type,
    })
    .then((data) => {
        console.log("Added Successfully...");
        console.log(data);
        res.status(200).json(data)
    }).catch((err) => {
        console.log("error: ", err.message)
        res.status(404).json({error: err})
    })

}