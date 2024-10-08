const mongoose = require("mongoose")

const wingigRegSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String,
    phoneNumber: Number

})

const WingigRegModel = mongoose.model("regis", wingigRegSchema)

module.exports = WingigRegModel