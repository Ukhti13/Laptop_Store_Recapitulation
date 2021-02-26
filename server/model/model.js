const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    product_number : {
        type : String,
        required: true,
        unique: true
    },
    product_name : {
        type: String,
        required: true
    },
    payment : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;