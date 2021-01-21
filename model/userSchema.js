const Mongoose = require('mongoose')


const user = new Mongoose.Schema({ 
    petName:{
        type: String,
        required: true

    },
    phoneNumber:{
        type: String,
        required: true
    }
})

module.exports = Mongoose.model('USER' , user)


