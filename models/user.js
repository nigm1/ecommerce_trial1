const mongoose=require('mongoose')

const User=mongoose.model('User',{
    name:{
        type: String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    cart:{
        type:Array
    }
    

})

module.exports=User;