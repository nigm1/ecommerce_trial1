if(process.env.NODE_ENV !== 'production'){
        require('dotenv').config()
    }
const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
        .then(()=>console.log('MONGODB CONNECTED'))
        .catch(err=>console.log(err))

module.exports=mongoose;