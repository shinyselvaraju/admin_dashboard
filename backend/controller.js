const models = require('./models')

module.exports.getregister = async (req,res) => {
    const register = await models.find()
    res.send(register)
}

module.exports.saveregister = async (req,res) => {

    const RegistrationDetails  = req.body.formData
    console.log(req)
    models
    .create({Registration: RegistrationDetails})
    .then((data) => {
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })

}