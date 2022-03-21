const express = require("express");
const app = express();
const connect = require('./config/db');
const userController = require("./controller/user.controller")


app.use(express.json())

app.use("/user",userController)


app.listen(3578, async()=>{
    try{
        console.log("listnening on port 3578")
    await connect()
    }catch(err){
        console.log(err.message)
    }
    
    
});