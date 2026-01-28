const mongoose=require('mongoose')
const ROLES = require('../enums/role.enum');

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:false
    },
    profile:{
        type:String,
        required:false
    },
    role:{
        type: String,
        enum: Object.values(ROLES),
        default: ROLES.USER
      }
})

module.exports=mongoose.model('User',userSchema)