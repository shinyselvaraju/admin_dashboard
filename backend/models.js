const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    Registration:{
        type: Object,
        require: true
}

    

})

module.exports = mongoose.model('register',registerSchema)