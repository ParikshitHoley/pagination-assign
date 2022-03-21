const express = require("express");

const EventEmitter = require("events");

const User = require("../model/user.model");

const router = express.Router();

const {confirmationEmail , adminMail} = require("../controller/mail.controller");

const eventEmitter = new EventEmitter();

router.post("",async(req,res)=>{

    try{
        const user = await User.create(req.body);

        const admin = await User.find({type:"admin"}).lean().exec();

        let  adminEmail = admin.map((el)=>{
            return el.email;
        });
        
        eventEmitter.on("User Registered",({user})=>{

            console.log(user)

            confirmationEmail({
                from:"niks@admin_gmail.com",
                to:user.email,
                user
            })
           
        });

        eventEmitter.on("User Registered",({user,adminEmail})=>{

            adminMail({
                to:adminEmail,
                user
               
            })
           
        });

        eventEmitter.emit("User Registered",({user,adminEmail}))
       
   
    return res.send("Mail sent successfully");

    }catch(err){

        res.status(500).send({"Message":err.message});
    }
})

module.exports = router;