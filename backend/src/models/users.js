const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    admissionNumber:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true,
        minlength:6
    },
    role:{
        type:String,
        enum:['member', 'club lead'],
        default:"member"
    },
    club:{
        type:String
    },
},
{timestamps:true}
)

module.exports = mongoose.model("User",UserSchema);