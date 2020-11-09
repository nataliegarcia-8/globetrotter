const { mongo } = require("mongoose");

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
    }, 
    name: {
        type: String,
        require: true,
    }
})

const UserData = mongoose.model('UserData', UserSchema)

module.exports = { UserData }
