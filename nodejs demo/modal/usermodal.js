const mongoose = require("mongoose")
const useermodal = new mongoose.Schema({
    username : {
        type : String,
        require: [true, "user name is required fuilds"]
    },

    email:{
        type: String,
        unique: [true, "email is required fuilds"]
    }
})

const user = mongoose.model("users", useermodal)

module.exports = user;