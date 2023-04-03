const express=require('express');
const router=express.Router();
const User=require('../models/user')


router.post('/add',async (req,res)=>{
    try {
        data=req.body;
        added_user=new User(data)
        savedUser = await added_user.save();
        res.send(savedUser)
    } catch (error) {
        console.log('error when adding new user : '+error);
    }
})

router.get('/getall',(req,res)=>{
    User.find()
    .then((users)=>{
        console.log('users');
        res.send(users)
    })
    .catch(err=>console.log(err))
})

router.get('/',(req,res)=>{
    res.render('index')
})

module.exports=router;