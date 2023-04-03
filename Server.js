const express=require('express');
//get  routers
const Userroute=require('./routes/user'); 

require('./config/Connect')  //connect to MONGO-DB

//set express app characteristics
const app=express();
app.use(express.json())
const expressLayouts=require('express-ejs-layouts')
app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

//set app routes
app.use('/user',Userroute)



//set app listening port
var port=process.env.PORT || 3000
app.listen(port,()=>{console.log(`server is listening in port ${port}`);})