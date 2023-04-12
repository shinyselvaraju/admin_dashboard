const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    address_1: {
        type: String,
        require: true
    },
    address_2: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    zipcode: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    website: {
        type: String,
        require: true
    },
    account_type: {
        type: Object,
        require: true
    },

})

module.exports = mongoose.model('register',registerSchema)